import React, { useState, useEffect } from 'react';
import httpHardCode from '../../../libs/http';
import axios from 'axios';

function Upload() {
    const [pages, setPages] = useState([]);
    const [list, setList] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [buildFiles, setBuildFiles] = useState(null);
    const [projectType, setProjectType] = useState('React');

    const apiUrl = httpHardCode();

    const hadeler = () => {
        setList(!list)
        if(list) {
            setProjectName('');
        }
    }

    const getPages = async () => {
        const url = `${apiUrl}/api/admin/routes`;
        const response = await axios.get(url);
        setPages(response.data)
    }

    const editActive = async (body, id, type) => {

        try {
            const url = `${apiUrl}/api/admin/edit_route`;
            await axios.put(url, {
                id: id,
                type: type,
                data: body
            });

            getPages();
            
        } catch (error) {
            console.log(error);
        }
        
    } 

    const uploadBuild = (event) => {

        const files = event.target.files;
        const formData = new FormData();

        // append eadh file to FormData
        Array.from(files).forEach((file) => {
            formData.append('files', file);
        });

        setBuildFiles(formData);
    }

    const upload = () => {

        let flag = true;

        if(!projectName && typeof(projectName) === 'string') {
            flag = false
        }

        if (!projectType && typeof(projectType) === 'string') {
            flag = false
        }

        if(flag) {
            const url = `${apiUrl}/api/admin/deploy_project`;
            // console.log(...buildFiles);
            let pool = buildFiles;

            pool.set("projectName", projectName);
            pool.set("projectType", projectType);

            try {
                axios.post(url, pool);
                setProjectName('');
                setProjectType('React');
                
            } catch (error) {
                console.log(error);
            }

        }
    }

    useEffect(() => {
        getPages();
    }, []);

  return (
    <>
      <div className={ list ? "smRow hiddenForm" : "noneRow hiddenForm"}>
            <div className={ list ? "form" : "hide"}>
                <div>
                    <input 
                    type='text'
                    placeholder='Project Name' 
                    className='input'
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    />
                </div>
                <div>
                    <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)} 
                    className='input'>
                        <option>React</option>
                        <option>Vue</option>
                    </select>
                </div>

                <div>
                    <label className='title'>Build folder</label>
                    <input 
                    type='file'
                    placeholder='Project Name' 
                    className='input'
                    webkitdirectory="true"
                    mozdirectory="true"
                    directory="true"
                    onChange={uploadBuild}
                    />
                </div>

                <div>
                    <button
                    onClick={upload} 
                    className='btnScale btnActive btnWide'>
                        Deploy <i className="bi bi-cloud-arrow-up"></i>
                    </button>
                </div>
                            
            </div>

                <div className='list'>
                    <div>
                        <button
                        onClick={hadeler} 
                        className='btn btnWide'
                        >Deploy New Project <i className="bi bi-plus-lg"></i></button>
                    </div>
                    {   
                        pages.map(index => {
                            return (
                                <div key={index.id} className='listItem'>
                                    <div>{index.name}</div>
                                <div>
                                    <button
                                    onClick={() => editActive(!index.active, index.id, 'active')}
                                    className={index.active ? 'btnScale btnActive' : 'btnScale btnDanger'}
                                    >
                                    { index.active ? 'Active' : 'Activate' }
                                    </button>

                                    <button className='btnScale btnDanger' style={{display: index.active ? 'none' : ''}}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                                        
                            </div>
                            )
                        }) 
                    }
                </div>
            </div>
    </>
  )
}

export default Upload
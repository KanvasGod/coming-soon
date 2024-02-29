import React, { useState, useEffect } from 'react';
import httpHardCode from '../../../libs/http';
import axios from 'axios';

function Edit() {
    const [list, setList] = useState(false);
    const [selected, setSelected] = useState(0);
    const [description, setDescription] = useState('');
    const [pages, setPages] = useState([]);
    const apiUrl = httpHardCode();

    const handler = (index, listIndex) => {
        setSelected(index);
        setDescription(listIndex.description)
        setList(true);
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

            if(type === 'description') {
                setList(false)
            }
            
        } catch (error) {
            console.log(error);
        }
        
    } 

    const editDec = (e) => {
        setDescription(e);
    }

    useEffect(() => {
        getPages();
    }, [])

    return (
        <>
            <div className={ list ? "smRow hiddenForm" : "noneRow hiddenForm"}>
                <div className={ list ? "form" : "hide"}>
                    <div>
                        <textarea 
                        rows="10" 
                        cols="38" 
                        className='input textbox'
                        value={description}
                        onChange={(e) => editDec(e.target.value)}
                        >
                        </textarea>
                        <div className='flexItem'>
                            <button onClick={() => editActive(description, pages[selected].id, 'description')} className='btnScale btnActive btnWide'>
                                confirm changes <i className="bi bi-check"></i>
                            </button>
                            <button onClick={() => setList(false)} className='btnScale btnDanger'>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                                
                    </div>
                            
                </div>

                <div className='list'>
                    { pages.map((index, i) => {
                        return (
                        <div key={index.id} className='listItem'>
                            <h4>{index.name}</h4>
                            <div>Framework: {index.framework}</div>
                            <div>
                                <button
                                onClick={() => editActive(!index.active, index.id, 'active')}
                                className={index.active ? 'btnScale btnActive' : 'btnScale btnDanger'}
                                >
                                    { index.active ? 'Active' : 'Activate' }
                                </button>
                                <button onClick={() => handler(i, index)} className='btnScale btnBlue'>
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                            </div>
                                                
                            </div>
                        )
                    }) }
                </div>
            </div>
        </>
    )
}

export default Edit
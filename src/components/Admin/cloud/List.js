import React, { useState, useEffect } from 'react'
import httpHardCode from '../../../libs/http';
import axios from 'axios';

function List() {

    const [list, setList] = useState([]);
    const [urlText, setUrlText] = useState('');
    const apiUrl = httpHardCode();

    const getList = async () => {
        const url = `${apiUrl}/api/admin/get_white_list`;
        const response = await axios.get(url);
        setList(response.data)
    }

    const remove = (id) => {
        const url = `${apiUrl}/api/admin/edit_white_list`;

        if(urlText) {

            if(list.includes(id) && id.toLowerCase() !== 'localhost') {
                axios.put(url, {
                    id: id
                })

                getList();
            } 
        }
    }

    const addToList = () => {
        const url = `${apiUrl}/api/admin/edit_white_list`;

        if(urlText) {
            let str = urlText.toString().trim();

            if(!list.includes(str.toLowerCase())) {
                axios.put(url, {
                    id: str
                })

                getList();
            } 
        }
    }

    useEffect(() => {
        getList();
        console.log(list);
    }, [])

    return (
        <>
            <div className='listItem'>
                <input onChange={(e) => setUrlText(e.target.value)} placeholder='Add url' className='input btnWide' />
                <button
                onClick={addToList}
                className='btnBlue btnCenter'
                >
                    Add <i className="bi bi-plus-lg"></i>
                </button>
            </div>
            <div>
                {
                    list.map((index, i) => {
                        return(
                            <div key={i} className='listItem'>
                                <h4>{index}</h4>

                                <button
                                style={{display: index === 'localhost' ? 'none': ''}}
                                onClick={() => remove(index)}
                                className='btnScale btnDanger'
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default List
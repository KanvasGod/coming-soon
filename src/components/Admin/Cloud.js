import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../../css/dash.css';

import Edit from './cloud/Edit';
import Upload from './cloud/Upload';

function Cloud() {
    const [menu, setMenu] = useState('upload');
    
    const handler = (id) => {
        setMenu(id);
    }

    const renderMenu  = () => {
        switch(menu) {
            case 'upload':
                return <Upload />
            case 'edit':
                return <Edit />
            default:
                return <Upload />
        }
    }

    return (
        <Nav>
            <div className='window'>
                <div>
                    <h1>cloud</h1>
                </div>
                <div>
                    <ul className='btnHub'>
                        <li onClick={() => handler('upload')} className='btn'>Upload <i className="bi bi-plus-lg"></i></li>
                        <li onClick={() => handler('edit')} className='btn'>Edit <i className="bi bi-pencil-square"></i></li>
                    </ul>
                    
                    {renderMenu()}
                    
                </div>
            </div>
        </Nav>
  )
}

export default Cloud
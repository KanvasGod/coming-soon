import React from 'react'
import { Link } from 'react-router-dom';

function Nav({children}) {
  return (
    <div className='navbar'>
        <nav>
            <div className='window displayCenter col'>
                <Link className='icon' to="/admin/dashboard">
                    <i className="bi bi-person-circle"></i>
                </Link>

                <Link className='icon' to="/admin/dashboard">
                    <i className="bi bi-door-open"></i>
                </Link>
            </div>

            <div className='window displayCenter col'>
                <Link className='icon' to="/admin/dashboard">
                    <i className="bi bi-cloud"></i>
                </Link>

                <Link className='icon' to="/admin/dashboard">
                    <i className="bi bi-list-check"></i>
                </Link>
            </div>
            
        </nav>
        {children}
    </div>
  )
}

export default Nav
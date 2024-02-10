import React from 'react'
import { Link } from 'react-router-dom';
import httpHardCode from '../libs/http';

function Default() {
    const apiUrl =  httpHardCode();

    const getUrl = () => {
        const host = window.location.hostname;
        // check production
        if (host === 'localhost') {
        let uri_path = window.location.pathname.replace(/^\/pages\//, '');
        let dataString = uri_path.split('');
        let pool = '';

        dataString.forEach((value) => {
            if (value === '-') {
            pool += ' ';
            } else {
            pool += value;
            }
        });

        return `${pool.toLocaleUpperCase()} WEB APP`;
        } else {
        return host
        }
    }

    const getLogoUrl = () => {
        let url = apiUrl + '/api/images/gravity_web_services-assets-gravity.png';
        return url;
    }

    const getCreatorSiteUrl = () => {
        let url = window.location.origin + '/pages/gravity-web-services';
        return url;
    }
    
    return (
        <div className="App">
        <div className="branding">
            <img src={getLogoUrl()} alt="Gravity Logo" />
            <div>
                <h3>Gravity Wed Services</h3>
                <h4>
                    {getUrl() !== "/GRAVITY_ADMIN WEB APP" ? 'Coming Soon' : 'Admin Login'}
                </h4>
                {getUrl()}
            </div>
            <p>
            {
            getUrl() !== "/GRAVITY_ADMIN WEB APP" ?
            <div>Build your own web app. <a href={getCreatorSiteUrl()}>Head to Our homepage</a></div>
            : 
            <span>
                <Link to="/admin/dashboard">Log In</Link>
                <br/>
                <br/> 
                <Link to="/">Back</Link>
            </span>
            }
            
            </p>
        </div>
        <div>
            
        </div>
        </div>
    )
}

export default Default
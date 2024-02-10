import React, { useState, useEffect } from 'react';
import '../../css/dash.css';
import Nav from './Nav';
import httpHardCode from '../../libs/http';
import axios from 'axios';

function Dashboard() {
    const [name, setName] = useState('');
    const [active, setActive] = useState(0);
    const [unactive, setUnactive] = useState(0);
    const [limit, setLimit] = useState(0);
    const [overFlow, setOverFlow] = useState(0);
    
    const apiUrl = httpHardCode();

    const getServerData = async () => {
        try {
            const url = `${apiUrl}/api/admin/server_info`;
            const response = await axios.get(url);
            console.log(response.data);
            setName(response.data.server);
            setActive(response.data.active_sites);
            setLimit(response.data.page_limit);
            setOverFlow(response.data.page_overflow);
            setUnactive(response.data.unactive_sites);
        } catch (error) {
            console.error('Error fetching server data:', error);
        }
    }

    getServerData();

    return (
        <Nav>
            <div className='window'>
                <div>
                    <h1>{name}</h1>
                </div>
                <div>
                    <p>Active Sites: {active}</p>
                    <p>Deactivated Sites: {unactive}</p>
                    <p>Site Limit: {limit}</p>
                    <p>Overflow Sites: {overFlow}</p>
                </div>
            </div>
        </Nav>
    )
}

export default Dashboard;
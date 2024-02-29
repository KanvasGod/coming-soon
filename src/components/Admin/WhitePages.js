import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../../css/dash.css';

import List from './cloud/List';

function WhitePages() {

  return (
    <Nav>
        <div className='window'>
            <div>
                <h1>White List URL's</h1>
                <p>White Listed Urls Go here</p>
            </div>

            <div>   
                <List />   
            </div>

        </div>
    </Nav>
  )
}

export default WhitePages
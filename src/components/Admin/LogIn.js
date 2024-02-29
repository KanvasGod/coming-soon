import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import httpHardCode from '../../../libs/http';
// import axios from 'axios';

function LogIn({ auth }) {
  // const [email, setEmail] = useState(false);
  // const [password, setPassword] = useState(false);
  const navigate = useNavigate();

  // const apiUrl = httpHardCode();

  const routeTo = () => {
      auth();
      navigate('/admin/dashboard');
  }

  return (
    <div>
      <button onClick={routeTo}>
        LogIn
      </button>

    </div>
  )
}

export default LogIn
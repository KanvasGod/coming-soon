import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Default from './components/Default';
import DashBoard from './components/Admin/DashBoard';
import WhitePages from './components/Admin/WhitePages';
import Cloud from './components/Admin/Cloud';
import Account from './components/Admin/Account';
import ProtectedRoute from './components/ProtectedRoute';
import "bootstrap-icons/font/bootstrap-icons.css";
import LogIn from './components/Admin/LogIn';


function App() {

  const [auth, setAuth] = useState(false);

  const logInHandle = () => {
    setAuth(true);
  }

  const logOutHandle = () => {
    setAuth(false);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='admin/dashboard' element={<ProtectedRoute component={DashBoard} condition={auth} redirectTo="/admin" />} />
          <Route path='admin/cloud' element={<ProtectedRoute component={Cloud} condition={auth} redirectTo="/admin" />} />
          <Route path='admin/account' element={<ProtectedRoute component={Account} condition={auth} redirectTo="/admin" />} />
          <Route path='admin/whitepages' element={<ProtectedRoute component={WhitePages} condition={auth} redirectTo="/admin" />} />
          <Route path='admin' element={<LogIn auth={logInHandle} />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

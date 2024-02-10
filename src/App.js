import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Default from './components/Default';
import DashBoard from './components/Admin/DashBoard';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='admin/dashboard' element={<DashBoard />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import './App.min.css';
import Login from "./pages/login/Login";
import AdminHome from "./pages/AdminHome/AdminHome";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {



    return (
        <div id="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/admin_home" element={<AdminHome />} />
                </Routes>
            </BrowserRouter>


        </div>
);
}

export default App;

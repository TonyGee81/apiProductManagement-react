import React from 'react';
import './App.min.css';
import Login from "./pages/login/Login";
import AdminHome from "./pages/adminHome/AdminHome";
import ImportFile from "./pages/importFile/ImportFile";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from "./component/sidebar/Sidebar";
import AuthVerify from "./component/security/AuthVerify";
import TopBar from "./component/topBar/TopBar";
import HasToken from "./component/security/HasToken";
import ProductShow from "./pages/product/productShow";
import ProductsShow from "./pages/product/productsShow";

function App() {

    const hasToken = HasToken();

    return (
        <div id="wrapper">
            {hasToken && <Sidebar/>}
            <div id="content-wrapper" className="d-flex flex-column">
                <BrowserRouter>
                    <div id="content">
                        {hasToken && <TopBar/>}
                        <div className="container-fluid">
                            <AuthVerify />
                            <Routes>
                                <Route path="/" element={<Login/>}/>
                                <Route path="/admin_home" element={<AdminHome/>}/>
                                <Route path="/import" element={<ImportFile />}/>
                                <Route path="/products/show" element={<ProductsShow />}/>
                                <Route path="/product/show" element={<ProductShow />}/>
                                <Route path="/product/edit" element={<ProductShow />}/>
                            </Routes>

                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;

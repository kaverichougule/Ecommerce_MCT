import React from 'react';
import Header from "./Required/Header"
import Footer from "./Required/Footer"
import { Outlet } from "react-router-dom";
function Layout(props) {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
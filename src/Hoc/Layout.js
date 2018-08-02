import React from 'react';
import Header from '../Components/header_footer/Header';
import Footer from '../Components/header_footer/Footer';
import Home from '../Components/home';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <Home/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;
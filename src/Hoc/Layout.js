import React from 'react';
import Header from '../Components/header_footer/Header';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
};

export default Layout;
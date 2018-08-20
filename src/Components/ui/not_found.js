import React from 'react';
import {Helmet} from "react-helmet";


const NotFound = () => {
    return (
        <div className="not_found_container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 - Not Found</title>
            </Helmet>
            <div>Sorry :(</div>
            <div>Not Found</div>
        </div>
    );
};

export default NotFound;
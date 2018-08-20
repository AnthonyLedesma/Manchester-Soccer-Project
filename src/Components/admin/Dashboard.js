import React from 'react';
import AdminLayout from '../../Hoc/AdminLayout'
import {Helmet} from "react-helmet";


const Dashboard = () => {
    return (
        <AdminLayout>
            <div className="user_dashboard">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Admin Dashboard - MSP - Anthony Ledesma</title>
                </Helmet>
                <div>
                    This Is Your Dashboard
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
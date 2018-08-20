import React from 'react';
import Featured from './featured';
import MatchesHome from './matches';
import MeetPlayers from './meet_players';
import Promotion from './promotion';
import {Helmet} from "react-helmet";


const Home = () => {
    return (
        <div className="bck_blue">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Manchester Soccer Project - Anthony Ledesma</title>
            </Helmet>
            <Featured />
            <MatchesHome />
            <MeetPlayers />
            <Promotion />
        </div>
    );
};

export default Home;
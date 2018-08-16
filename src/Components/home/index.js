import React from 'react';
import Featured from './featured';
import MatchesHome from './matches';
import MeetPlayers from './meet_players';
import Promotion from './promotion';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured />
            <MatchesHome />
            <MeetPlayers />
            <Promotion />
        </div>
    );
};

export default Home;
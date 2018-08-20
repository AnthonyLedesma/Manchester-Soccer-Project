import React, { Component } from 'react';

import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../ui/misc';

import LeagueTable from './table';
import MatchesList from './matches_list';
import { Helmet } from "react-helmet";


class TheMatches extends Component {

    state = {
        loading: true,
        matches: [],
        filterMatches: [],
        playedFilter: 'All',
        resultFilter: 'All',
    }

    componentDidMount() {
        firebaseMatches.once('value').then(snapshot => {
            const matches = firebaseLooper(snapshot);
            this.setState({
                loading: false,
                matches: reverseArray(matches),
                filterMatches: reverseArray(matches)
            })
            console.log(this.state.matches);
        })
    }

    showPlayed = (played) => {
        const list = this.state.matches.filter((match) => {
            return match.final === played;
        });
        this.setState({
            filterMatches: played === 'All' ? this.state.matches : list,
            resultFilter: 'All',
            playedFilter: played,
        })
    }

    showResult = (results) => {
        const list = this.state.matches.filter((match) => {
            return match.result === results;
        })
        this.setState({
            filterMatches: results === 'All' ? this.state.matches : list,
            playedFilter: 'All',
            resultFilter: results,
        })
    }

    render() {
        const state = this.state;



        return (
            <div className="the_matches_container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The Matches - MSP - Anthony Ledesma</title>

                </Helmet>


                <div className="the_matches_wrapper">
                    <div className="left">
                        <div className="match_filters">
                            <div className="match_filters_box">
                                <div className="tag">
                                    Show Match
                                </div>
                                <div className="cont">
                                    <div className={`option ${state.playedFilter === 'All' ? 'active' : ''}`}
                                        onClick={() => this.showPlayed('All')}
                                    >
                                        All
                                    </div>
                                    <div className={`option ${state.playedFilter === 'Yes' ? 'active' : ''}`}
                                        onClick={() => this.showPlayed('Yes')}
                                    >
                                        Played
                                    </div>
                                    <div className={`option ${state.playedFilter === 'No' ? 'active' : ''}`}
                                        onClick={() => this.showPlayed('No')}
                                    >
                                        Not Played
                                    </div>

                                </div>
                            </div>

                            <div className="match_filters_box">
                                <div className="tag">
                                    Result game
                                </div>
                                <div className="cont">
                                    <div className={`option ${state.resultFilter === 'All' ? 'active' : ''}`}
                                        onClick={() => this.showResult('All')}
                                    >
                                        All
                                    </div>
                                    <div className={`option ${state.resultFilter === 'W' ? 'active' : ''}`}
                                        onClick={() => this.showResult('W')}
                                    >
                                        W
                                    </div>
                                    <div className={`option ${state.resultFilter === 'L' ? 'active' : ''}`}
                                        onClick={() => this.showResult('L')}
                                    >
                                        L
                                    </div>
                                    <div className={`option ${state.resultFilter === 'D' ? 'active' : ''}`}
                                        onClick={() => this.showResult('D')}
                                    >
                                        D
                                    </div>

                                </div>
                            </div>


                        </div>
                        <MatchesList matches={state.filterMatches} />
                    </div>
                    <div className="right">
                        <LeagueTable />
                    </div>
                </div>
            </div>

        );
    }
}

export default TheMatches;
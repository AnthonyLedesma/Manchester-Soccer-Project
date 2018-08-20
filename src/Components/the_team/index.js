import React, { Component } from 'react';
import PlayerCard from '../ui/PlayerCard';
import Fade from 'react-reveal/Fade';

import Stripes from '../../Resources/images/stripes.png';
import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../ui/misc';
import { Promise } from 'core-js';
import {Helmet} from "react-helmet";


class TheTeam extends Component {

    state = {
        loading: true,
        players: []
    }

    componentDidMount() {
        firebasePlayers.once('value').then(snapshot => {
            const players = firebaseLooper(snapshot);
            const promises = [];

            for (let key in players) {
                promises.push(
                    new Promise((resolve) => {
                        firebase.storage().ref('players').child(players[key].image).getDownloadURL()
                            .then(url => {
                                players[key].url = url;
                                resolve();
                            }).catch(e => console.log(e))
                    })
                )
            }
            Promise.all(promises).then(() => {
                this.setState({
                    loading: false,
                    players
                })
            });
            console.log(this.state.players);
        })
    }

    showPlayersByCategory = (category) => (
        this.state.players ?
            this.state.players.map((player, i) => {
                return player.position === category ?
                    <Fade left delay={i * 20} key={i}>
                        <div className="item">
                            <PlayerCard
                                number={player.number}
                                name={player.name}
                                lastname={player.lastname}
                                bck={player.url}
                            />
                        </div>
                    </Fade>
                    : null
            })
            : null
    )

    render() {

        return (
            <div className="the_team_container"
                style={{ background: `url(${Stripes}) repeat` }}
            >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The Team - MSP - Anthony Ledesma</title>
                </Helmet>
                {!this.state.loading ?
                    <div>
                        <div className="team_category_wrapper">
                            <div className="title">Midfield</div>
                            <div className="team_cards">
                                {this.showPlayersByCategory('Midfield')}
                            </div>

                            <div className="title">Defence</div>
                            <div className="team_cards">
                                {this.showPlayersByCategory('Defence')}
                            </div>

                            <div className="title">Strikers</div>
                            <div className="team_cards">
                                {this.showPlayersByCategory('Striker')}
                            </div>

                            <div className="title">Keepers</div>
                            <div className="team_cards">
                                {this.showPlayersByCategory('Keeper')}
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        );
    }
}

export default TheTeam;
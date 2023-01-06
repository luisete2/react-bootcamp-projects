import React, {Component} from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions'
import {fetchNewDeck} from '../actions/deck';
import {startGame, cancelGame} from '../actions/settings';
import fetchStates from '../reducers/fetchStates';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component {
    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();
    }
    render() {
        if (this.props.fetchState === fetchStates.error){
            return (
                <div>
                    <p>Please try reloading the app. An error occurred.<br/>
                    {this.props.message}</p>
                </div>
            )
        }
        return (
            <div>
                <h2>♠️ ♦️ Evens or Odds ♣️ ♥️</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The game is on!</h3>
                            <GameState/>
                            <Guess/>
                            <br/>
                            <DrawCard/>
                            <Card/>
                            <br/>
                            <button onClick={this.props.cancelGame}>End game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits</h3>
                            <br/>
                            <button onClick={this.startGame}>Start game</button>
                        </div>
                    )
                }
                <hr/>
                <Instructions/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        settings: {gameStarted},
        deck: {fetchState, message}
    } = state;
    return { gameStarted, fetchState, message};
}

export default connect(mapStateToProps, {startGame,cancelGame,fetchNewDeck})(App);
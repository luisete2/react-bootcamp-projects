import React from 'react';
import { connect } from 'react-redux';
import {expandInstructions, collapseInstructions} from '../actions/settings';

const Instructions = props => {
    const {instructionsExpanded, collapseInstructions, expandInstructions} = props;
    if (instructionsExpanded) {
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h3>Instructions</h3>
                <p style={{textAlign: "justify",width: "400px"}}>The game consists on guessing as many odd and even cards as possible from the deck.
                Select if the next card will be odd or even and click "Draw card!".
                Your guess will be kept on the position you selected until you manually switch it.
                If you guessed correctly, you will score one point. A perfect score is 52. Try to beat the current record!</p>
                <button onClick={collapseInstructions}>Show less</button>
            </div>
        ); 
    }
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h3>Instructions</h3>
            <p style={{textAlign: "justify", width: "400px"}}>The game consists on guessing as many odd...</p>
            <button onClick={expandInstructions}>Show more</button>
        </div>
    )
}

export default connect(state => ({instructionsExpanded: state.settings.instructionsExpanded}), {expandInstructions, collapseInstructions})(Instructions);
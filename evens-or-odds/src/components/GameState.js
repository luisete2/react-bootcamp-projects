import React from "react";
import { connect } from "react-redux";

const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD';

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecordKey));
    if (correctGuesses > record) {
      localStorage.setItem(correctGuessesRecordKey, correctGuesses);
      return { record: correctGuesses, isNewRecord: true };
    }
    return { record, isNewRecord: false };
}

const GameState = ({remaining, correctGuesses}) => {
    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';
    const { record, isNewRecord } = checkRecord(correctGuesses);
    const crown = isNewRecord ? '👑 New record' : 'Record';
    return(
        <div>
            <h1>{crown}: {record} </h1>
            <p>{remaining} cards remaining</p>
            <p>{correctGuesses} correct {guessText}</p>
        </div>
    )
}

export default connect(
    ({
        deck: {remaining},
        gameState: {correctGuesses}
    }) => ({remaining, correctGuesses})
)(GameState);
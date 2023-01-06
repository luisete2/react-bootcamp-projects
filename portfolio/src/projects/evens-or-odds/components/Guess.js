import React from "react";
import {connect} from "react-redux";
import { guessEven, guessOdd, guessFace } from "../actions/guess";

const Guess = ({guess, guessEven, guessOdd, guessFace}) => {
    return (
        <div>
            <h3>Will it be even, odd or face/ace?</h3>
            <button onClick={guessEven} style={guess === 'even' ? {border: '2px solid #43a047'} : null}>Even</button>{' '}<button onClick={guessOdd} style={guess === 'odd' ? {border: '2px solid #43a047'} : null}>Odd</button>{' '}<button onClick={guessFace} style={guess === 'face' ? {border: '2px solid #43a047'} : null}>Face or Ace</button>
        </div>
    )
}

export default connect(({ gameState: {guess}}) => ({ guess }), {guessEven, guessOdd, guessFace})(Guess);

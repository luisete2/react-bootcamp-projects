import { SET_GUESS, SET_GAME_STARTED, CARD} from "../actions/types";

const EVENS = ['2', '4', '6', '8', '10' ], ODDS = ['1', '3', '5', '7', '9'], FACE = ['ACE', 'JACK', 'QUEEN', 'KING'];

const DEFAULT_GAME_STATE = { guess: '', correctGuesses: 0 };

const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => {
    switch(action.type){
        case SET_GUESS:
            return {...state, guess: action.guess};
        case SET_GAME_STARTED:
            return DEFAULT_GAME_STATE;
        case CARD.FETCH_SUCCESS:
            const {value} = action.cards[0];
            const {guess, correctGuesses} = state;
            if((guess === 'even' && EVENS.includes(value)) || (guess === 'odd' && ODDS.includes(value)) || (guess === 'face' && FACE.includes(value))){
                return {...state, correctGuesses: correctGuesses+1}
            }
        default:
            return state;
    }
}

export default gameStateReducer;
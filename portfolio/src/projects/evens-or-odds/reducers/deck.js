import { DECK, CARD, SET_GAME_STARTED } from "../actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_DECK ={
    deck_id: '',
    remaining: 0,
    fetchState: '',
    message: ''
}
const deckReducer = (state = DEFAULT_DECK, action) => {
    let remaining, deck_id, cards;
    switch(action.type){
        case DECK.FETCH_SUCCESS:
            ({remaining, deck_id} = action);
            return{
                ...state, remaining, deck_id, fetchState: fetchStates.success
            }
        case DECK.FETCH_ERROR:
            return{
                ...state, message: action.message, fetchState: fetchStates.error
            }  
        case CARD.FETCH_SUCCESS:
            ({cards, remaining} = action);
            return{
                ...state, cards, remaining, fetchState: fetchStates.success
            };   
        case CARD.FETCH_ERROR:
            return{
                ...state, message: action.message, fetchState: fetchStates.error
            } 
        case SET_GAME_STARTED:
            return {
                ...state, cards: null
            } 
        default:
            return state;
    }
}

export default deckReducer;
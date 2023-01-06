import { DECK, CARD } from "./types";

const API_ADDRESS = 'https://www.deckofcardsapi.com/api/deck/';

export const fetchDeckSuccess = deckJson => {
    const {remaining, deck_id} = deckJson;
    return {type: DECK.FETCH_SUCCESS, remaining, deck_id};
}

export const fetchNewDeck = () => dispatch => {
    return fetch(API_ADDRESS+'new/shuffle').then(response => {
        if (response.status !== 200){
            throw new Error('Unsuccessful request to deckofcardsapi.com')
        }
        return response.json()
    }).then(json => dispatch(fetchDeckSuccess(json))).catch(error => dispatch({type: DECK.FETCH_ERROR, message: error.message}));
}

export const fetchDrawCard = deck_id => dispatch => {
    return fetch(API_ADDRESS+deck_id+'/draw').then(response => {
        if (response.status !== 200){
            throw new Error('Unsuccessful request for new card to deckofcardsapi.com')
        }
        return response.json()
    }).then(json => {dispatch({
        type: CARD.FETCH_SUCCESS,
        cards: json.cards,
        remaining: json.remaining
    })}).catch(error => dispatch({type: CARD.FETCH_ERROR, message: error.message}));
}
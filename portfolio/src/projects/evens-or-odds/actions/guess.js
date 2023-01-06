import { SET_GUESS } from "../actions/types";

export const guessEven = () => {
    return{
        type: SET_GUESS, guess: 'even'
    }
}

export const guessOdd = () => {
    return{
        type: SET_GUESS, guess: 'odd'
    }
}

export const guessFace = () => {
    return{
        type: SET_GUESS, guess: 'face'
    }
}
import React from "react";
import { connect } from "react-redux";
import {fetchDrawCard} from '../actions/deck';

const DrawCard = ({deck_id, remaining, fetchDrawCard}) =>{
    return (
        remaining > 0 ? (
            <div>
                <button onClick={fetchDrawCard(deck_id)}>
                    Draw a card!
                </button>
            </div>
        ) : (
            <div>
                <p>No more cards left!</p>
            </div>
        ) 
    )
}

const mapDispatchToProps = dispatch => {
    return {fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))};
}

export default connect(
    ({ deck: {deck_id, remaining}}) => ({ deck_id, remaining }), mapDispatchToProps
)(DrawCard);
import React from "react";
import { connect } from "react-redux";

const Card = ({cards}) => {
    if(!cards) return null;
    const {value, suit, image} = cards[0];
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h3>It's the {value} of {suit}!</h3>
            <img src={image} alt='card-image'/>
        </div>
    )
}

export default connect(({deck: {cards}}) => ({cards}))(Card);
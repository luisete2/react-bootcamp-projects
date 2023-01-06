import React, {useState} from "react";
import MATRIX from './data/matrix';
import { useDynamicTransition } from "./hooks";

const MILISECONDS = 100;
const minimumDelay = 1 * MILISECONDS;
const minimumIncrement = 1;

function Matrix(){
    const [delay, setDelay] = useState(3 * MILISECONDS);
    const [increment, setIncrement] = useState(1);
    const index = useDynamicTransition({
        delay, increment, length: MATRIX.length
    });

    const updateDelay = event => {
        const delay = Number(event.target.value) * MILISECONDS
        setDelay(delay < minimumDelay ? minimumDelay : delay);
    }
    const updateIncrement = event => {
        const increment = Number(event.target.value);
        setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
    }

    return(
        <div className="Matrix">
            <img src={MATRIX[index]} alt="matrix"/>
            <br/>
            <div className="multiform">
                <div>
                    Matrix transition delay (miliseconds):
                    <input type="number" onChange={updateDelay}/>
                </div>
                <div>
                    Matrix increment:
                    <input type='number' onChange={updateIncrement}/>
                </div>
            </div>
        </div>
    )
}

export default Matrix;
import React from 'react';
import s from './CounterButtons.module.css';

type CounterButtonType = {
    addInc: () => void
    count: number
    reset: () => void
}

function CounterButtons(props: CounterButtonType) {

    const addInc = () => {props.addInc()}
    const reset = () => {props.reset()}

    return <div>
        <div className={s.buttons}>
            <span><button className={s.buttonsInc}
                          onClick={addInc}
                          disabled={props.count === 5}
            >Inc</button></span>
            <span><button className={s.buttonsReset}
                          onClick={reset}
                          disabled={props.count < 5}
            >Reset</button></span>
            <span><button className={s.buttonsSet}>Set</button></span>
        </div>
    </div>
}
export default CounterButtons
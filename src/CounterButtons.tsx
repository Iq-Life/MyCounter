import React from 'react';
import s from './CounterButtons.module.css';

type CounterButtonType = {
    addInc: () => void
    count: number
    reset: () => void
    collapsed: boolean
    onClick:(unCollapsed:boolean) => void
    maxNumb:number
}

function CounterButtons(props: CounterButtonType) {

    const addInc = () => {props.addInc()}
    const reset = () => {props.reset()}
    const set = () => { props.onClick(!props.collapsed) }

    return <div>
        <div className={s.buttons}>
            <span><button className={s.buttonsInc}
                          onClick={addInc}
                          disabled={props.count === props.maxNumb}
            >Inc</button></span>
            <span><button className={s.buttonsReset}
                          onClick={reset}
                          disabled={props.count < props.maxNumb}
            >Reset</button></span>
            <span><button className={s.buttonsSet}
                onClick={set}
            >Set</button></span>
        </div>
    </div>
}

export default CounterButtons
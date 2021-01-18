import React, {useState} from 'react';
import s from './Set.module.css';

type SetType = {
    maxNumb: number
    setMaxNumb: (setMaxNumb: number) => void
    setCount: (setCount:number) => void
    startCount:number
}

function Set(props: SetType) {
    const [inputMaxNumb, setInputMaxNumb] = useState<number>(0)
    const [inputStartNumb, setInputStartNumb] = useState<number>(0)

    let onChangeMaxValue = (e: any) => {
        let maxValue = e.currentTarget.value
        setInputMaxNumb(maxValue)
    }
    let onChangeStartValue = (e: any) => {
        let startValue = e.currentTarget.value
        setInputStartNumb(startValue)
    }
    let saveClick = () => {
            props.setMaxNumb(inputMaxNumb)
            props.startCount=inputStartNumb
    }
    return (
        <div className={s.Set}>
            <div>Max value</div>
            <input className={s.input}
                   placeholder={"Max value"}
                   type='number'
                   max={999}
                   min={-999}
                   onChange={onChangeMaxValue}
            />
            <div>Start value</div>
            <input className={s.input}
                   type='number'
                   max={999}
                   min={-999}
                   placeholder={"Start value"}
                   onChange={onChangeStartValue}
            />

            <div className={s.button}
            >
                <button onClick={saveClick}>Save</button>
            </div>
        </div>
    )
}

export default Set
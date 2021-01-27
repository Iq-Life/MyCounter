import React, {ChangeEvent, useState} from 'react';
import s from './Set.module.css';

type SetType = {
    maxNumb: number
    setMaxNumb: (setMaxNumb: number) => void
    setCount: (setCount: number) => void
    startNumb: number
    setStartNumb: (setStartNumb: number) => void
}

function Set(props: SetType) {
    const [inputMaxNumb, setInputMaxNumb] = useState<number>(0)
    const [inputStartNumb, setInputStartNumb] = useState<number>(0)

    const classForInputMax = inputMaxNumb > inputStartNumb ? s.input : s.error
    const classForInputStart = inputStartNumb < inputMaxNumb ? s.input : s.error

    let onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = e.currentTarget.valueAsNumber
        setInputMaxNumb(maxValue)
    }
    let onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = e.currentTarget.valueAsNumber
        setInputStartNumb(startValue)
    }
    let saveClick = () => {
        if (inputMaxNumb > inputStartNumb) {
            props.setMaxNumb(inputMaxNumb)
        }
        if (inputStartNumb < inputMaxNumb) {
            props.setCount(inputStartNumb)
            props.setStartNumb(inputStartNumb)
        }
    }
    return (
        <div className={s.Set}>
            <div>Max value</div>
            <input className={classForInputMax}
                   placeholder={"Max value > Start value"}
                   type='number'
                   max={999}
                   min={-999}
                   onChange={onChangeMaxValue}

            />

            <div>Start value</div>
            <input className={classForInputStart}
                   type='number'
                   max={999}
                   min={-999}
                   placeholder={"Start value < Max value"}
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
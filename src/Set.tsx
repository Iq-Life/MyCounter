import React, {useState} from 'react';
import s from './Set.module.css';

type SetType = {
    maxNumb: number
    setMaxNumb: (setMaxNumb: number) => void
    setCount: (setCount:number) => void
    inputStartNumb:number
    setInputStartNumb:(setInputStartNumb:number) => void
}

function Set(props: SetType) {
    const [inputMaxNumb, setInputMaxNumb] = useState<number>(0)

    let onChangeMaxValue = (e: any) => {
        let maxValue = e.currentTarget.value
        setInputMaxNumb(maxValue)
    }
    let onChangeStartValue = (e: any) => {
        let startValue = e.currentTarget.value
        props.setInputStartNumb(startValue)
    }
    let saveClick = () => {
        if (inputMaxNumb > props.maxNumb) {
            props.setMaxNumb(inputMaxNumb)
        }
        if ( props.inputStartNumb > inputMaxNumb){
            props.setCount(props.inputStartNumb)
        }
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
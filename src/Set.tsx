import React from 'react';
import s from './Set.module.css';

function Set() {

    return (
        <div className={s.Set}>
        <div>Max value</div>
        <input placeholder={"Max value"}/>
        <div>Start value</div>
        <input placeholder={"Start value"}/>
            <div className={s.button}
            ><button>Save</button></div>
    </div>
    )
}

export default Set
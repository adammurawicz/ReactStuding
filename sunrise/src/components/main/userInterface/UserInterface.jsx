import s from './UserInterface.module.css'
import { useState } from 'react';

export function UserInterface ({ changeQuery }) {

    const inputAction = (e) => {
        changeQuery(e.target.value)
    }

    const cleaning = () => {
        const input = document.querySelector('input').value = ''
    }

    const checkEnter = (e) => {
        if(e.key == 'Enter') {
            inputAction(e)
            cleaning()
        }
    }

    return (
        <div>
            <input onChange={inputAction} onKeyUp={checkEnter} type='text' placeholder='type city name...'/>
            <button onClick={cleaning}>check it!</button>
        </div>
    )
}
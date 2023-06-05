import s from './UserInterface.module.css'
import { useState } from 'react';

export function UserInterface ({ transferRequest, transferError }) {

    const inputAction = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== ''){
            transferRequest(e.target.value)
            cleaning()
        }
    }

    const cleaning = () => {
        const input = document.querySelector('input').value = ''
    }

    const checkEnter = (e) => {
        if(e.key == 'Enter') {
            inputAction(e)
        }
    }

    return (
        <div className={s.userInterface}>
            <input onChange={inputAction} onKeyUp={inputAction} type='text' placeholder='type city name...'/>
            <button onClick={() => {transferRequest(document.querySelector('input').value) 
                                    cleaning()}}>check it!</button>
            <p>{transferError != '' ? transferError : null}</p>
        </div>
    )
}
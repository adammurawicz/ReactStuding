import s from './UserInterface.module.css'
import { useState } from 'react'
import { getRequest } from '../../../API/API'

function UserInterface (props) {

    const [food, setFood] = useState('')
    const input = document.querySelector('input')


    function typeInput (e) {
            setFood(e.target.value)
    }

    function action () {
            if (food == '') {
                console.log('null');
            } else {
                props.function(food)
                cleanInput()
                getRequest(food)
            }
    }

    function checkEnter (e) {
        if (e.key == 'Enter') {
            action()
        }
    }
    
    
    function cleanInput () {
        input.setAttribute('placeholder', 'Enter a what you have eaten')
        input.value = ''
    }

    return (
        <div className={s.userInterfaceWrapper}>
            <input type='text' placeholder='Enter a what you have eaten' onKeyUp={checkEnter} onChange={typeInput}/>
            <button onClick={() => action()}>Calculate Foods</button>
        </div>
    )
}


export default UserInterface
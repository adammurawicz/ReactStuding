import s from './UserInterface.module.css'
import { useEffect, useState } from 'react'
import { FoodAPI } from '../../../API/API'

function UserInterface (props) {

const [value, setValue] = useState('')
    
function fetchQuery(e) {
    if (e.key === 'Enter' && e.target.value.trim() !== ''){
        props.function(e.target.value)
        setValue('')
    }
}

function handleChange(e) {
    setValue(e.target.value)
}

    return (
        <div className={s.userInterfaceWrapper}>
            <input type='text' placeholder='Enter a what you have eaten' value={value} onKeyUp={fetchQuery} onChange={handleChange}/>
            <button onClick={ (e) => {props.function(e.target.value)
                                      setValue('')}}>Calculate Foods
            </button>
        </div>
    )
}


export default UserInterface
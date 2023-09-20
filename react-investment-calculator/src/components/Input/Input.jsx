import { useState } from 'react'
import s from './Input.module.css'

export const Input = (props) => {

const newDate = new Date()
const year = newDate.getFullYear()
const month = newDate.getMonth() + 1 <= 9 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1
const day = newDate.getDate() <= 9 ? '0' + newDate.getDate() : newDate.getDate()
const today = `${year}-${month}-${day}` 

const [people, setPeople] = useState('')
const [bill, setBill] = useState('')
const [tip, setTip] = useState('')
const [error, setError] = useState('')
const [date, setDate] = useState(today)

let value

const inputAction = (e, functionName) => {
    functionName(e.target.value)
}

const mainFunction = (e) => {
    e.preventDefault()
    checkInputs()
}

const checkInputs = () => {
    const inputs = document.querySelectorAll('input')
    for (let input of inputs) {
        if (input.value.trim() === '') {
            setError('Fill all inputs')
            return
        } else {
            setError('')
        }
    }
    calculateTip(people, bill, tip, date)
    clearFunction()
}

const calculateTip = (people, bill, tip, date) => {
    value = (parseInt(bill) + (parseInt(bill) * (parseInt(tip) / 100))) / parseInt(people)
    props.onFetchValues(value, date)
}
    
const deleteFunction = (e) => {
    e.preventDefault()
    clearFunction()
}

const clearFunction = () => {
    setPeople('')
    setTip('')
    setBill('')
    setDate(today)
    setError('')
}


    return (
        <form onSubmit={mainFunction} className={s.form}>
            <label htmlFor='people'>How many people?</label>
            <input id='people' type='number' min='1' value={people} onChange={(e) => inputAction(e, setPeople)}></input>
            <label htmlFor='bill'>Amount of your bill in $</label>
            <input id='bill' type='number' min='1' value={bill} onChange={(e) => inputAction(e, setBill)}></input>
            <label htmlFor='tip'>Amount of your tip in %</label>
            <input id='tip' type='number' min='0' max='100' value={tip} onChange={(e) => inputAction(e, setTip)}></input>
            <label htmlFor='date'>Date of lunch</label>
            <input id='date' type='date' min='2023-01-02' max='2023-12-31' value={date} onChange={(e) => inputAction(e, setDate)}></input>
            <p className={s.error}>{error}</p>
            <div>
                <button className={s.btn} type='submit'>Calculate</button>
                <button className={s.btn} onClick={deleteFunction}>Delete</button>
            </div>
        </form>
    )
}
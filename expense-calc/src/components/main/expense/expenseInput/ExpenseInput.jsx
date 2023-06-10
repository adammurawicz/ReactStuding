import s from './ExpenseInput.module.css'
import { addExpenseAction } from '../../../store/expense/expense-slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export function ExpenseInput () {

    // dispatch - do wywoływania funkcji ze slic-a
    const dispatch = useDispatch()

    const [ name, setName ] = useState()
    const [ price, setPrice ] = useState()

    function submit(e) {
        e.preventDefault()
        dispatch(addExpenseAction({price, name}))
        console.log('submit');
    }

    return (
        <form onSubmit={submit}>
            <input type='text' placeholder='expenses title' onChange={(e) => setName(e.target.value)}/>
            <input type='number' min='0' placeholder='expense number' onChange={(e) => setPrice(e.target.value)}/>
            <button>Add your expense</button>
        </form>
    )
}
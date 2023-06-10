import { useDispatch } from 'react-redux'
import s from './RevenueInput.module.css'
import { addRevenueAction } from '../../../store/revenue/revenue-slice'
import { useState } from 'react'

export function RevenueInput () {

    const dispatch = useDispatch()

    const [ name, setName ] = useState()
    const [ price, setPrice ] = useState()

    function submit(e) {
        e.preventDefault()
        dispatch(addRevenueAction({price, name}))
        console.log('submit');
    }

    return (
        <form onSubmit={submit}>
            <input type='text' placeholder='revenue title' onChange={(e) => setName(e.target.value)}/>
            <input type='number' min='0' placeholder='revenue number' onChange={(e) => setPrice(e.target.value)}/>
            <button>Add your revenue</button>
        </form>
    )
}
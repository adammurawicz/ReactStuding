import s from './Main.module.css'
import UserInterface from './UserInterface/UserInterface'
import FoodInterface from './FoodInterface/FoodInterface'
import { FoodAPI } from '../../API/API'
import { useState, useEffect } from 'react'


function Main () {

    const [food, setFood] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
      
    }, [food])

    async function fetchFood(value) {
        try {
            const searchResponse = await FoodAPI.fetchData(value)
            if(searchResponse != food) {
                setFood(searchResponse)
                setError('')
            }
        }
        catch(error) {
            setError('sth got wrong...')
            setFood('')
        }
    }

    return (
        <main className={s.main}>
            <UserInterface function={fetchFood}/>
            <FoodInterface data={food} error={error}/>
            <div className={s.dark}></div>
        </main>
    )
}

export default Main
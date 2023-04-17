import s from './Main.module.css'
import UserInterface from './UserInterface/UserInterface'
import FoodInterface from './FoodInterface/FoodInterface'
import { useState } from 'react'
import { getRequest } from '../../API/API'

function Main () {

    const [query, setQuery] = useState('')

    return (
        <main className={s.main}>
            <UserInterface function={setQuery} />
            <FoodInterface/>
            <div className={s.dark}></div>
        </main>
    )
}

export default Main
import s from './Main.module.css'
import { UserInterface } from './userInterface/UserInterface'
import { ResponseInterface } from './responseInterface/ResponseInterface'
import { useState, useEffect } from 'react'
import { getRequest } from '../../API'

export function Main () {

const [query, setQuery] = useState('Poznan')
const [respo, setRespo] = useState('')

const changeQuery = (city) => {
    setQuery(city)
}

// useEffect(() => {
//     if (query) {
//         getRequest(query)
//     }
// } )


    return (
        <main>
            <UserInterface changeQuery={changeQuery}/>
            <ResponseInterface/>
            <button onClick={() => console.log(query)}>Check</button>
        </main>
    )
}
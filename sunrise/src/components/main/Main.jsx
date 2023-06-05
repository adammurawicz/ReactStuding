import s from './Main.module.css'
import { UserInterface } from './userInterface/UserInterface'
import { ResponseInterface } from './responseInterface/ResponseInterface'
import { useState, useEffect } from 'react'
import { getRequest } from '../../API'
import { WeatherAPI } from '../../API'

export function Main () {

const [weather, setWeather] = useState('')
const [error, setError] = useState('')


useEffect(() => {

}, [weather])

async function getRequest(query) {
    try {
        const response = await WeatherAPI.getRequest(query)
        if (response != weather) {
            setWeather(response)
            console.log(response);
            setError('')
        }
    }
    catch (error) {
        console.log('catch', error);
        setError('sth is wrong with your query')
        setWeather('')
    }
}


    return (
        <main>
            <UserInterface transferRequest={getRequest} transferError={error}/>
            <ResponseInterface data={weather}/>
        </main>
    )
}
import axios from 'axios'
let sunrise
let sunset
let error

export class WeatherAPI {

    static async getRequest(query) {
        
        const city = query
        const API_KEY = 'b7125f1e12692942e0d54a9367a68f4e'
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        
        const res = await axios.get(URL)
        return res.data
    }
}
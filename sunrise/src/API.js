import axios from 'axios'
let sunrise
let sunset
let error

export class WeatherAPI {
    static async getRequest() {
        const res = await axios.get(URL)
        return res = res.data.weather[0]
    }
}


// export const getRequest = async (query) => {
//     const city = query || 'Poznan'
//     const API_KEY = 'b7125f1e12692942e0d54a9367a68f4e'
//     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

//     try {const res = await axios.get(URL)
//         return res = res.data.weather[0]
//         const weather = res.data.weather[0].description
//         const id = res.data.weather[0].id
//         console.log(weather, id);
        
//     }

//     catch (err) {
//         console.log(`Fatal error of API: ${err}`)
//         error = `Something is wrong with your query`
//     }

   
      
// }




import axios from 'axios' 

const APP_ID = 'a2ef3889'
const APP_KEY = '546c62f9fbf13da73a0b408bfd887334'
let data
let ingr
let food
let energy
let protein
let fat
let carbs
let error

export class FoodAPI {
     static async fetchData (query) {
        let ingr = query
        const URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${ingr}`
        const res = await axios.get(URL)
        return res.data.parsed[0].food
    }
}

// export const getRequest = async (query) => {
//      let ingr = query
//      const URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${ingr}`

//      try {const res = await axios.get(URL)
//          data =  res.data.parsed[0].food
//          food = res.data.parsed[0].food.label
//          energy = res.data.parsed[0].food.nutrients.ENERC_KCAL
//          protein = res.data.parsed[0].food.nutrients.PROCNT.toFixed(1)
//          fat = res.data.parsed[0].food.nutrients.FAT.toFixed(1)
//          carbs = res.data.parsed[0].food.nutrients.CHOCDF.toFixed(1);                     
//          error = '' 
//          return data = [food, energy, protein, fat, carbs] 
//         }
        
//         catch (err) {
//             console.log(`Fatal error of API: ${err}`)
//             return err        
//         }
        
//     }
    
//     export function getData () {
//         const data = [food, energy, protein, fat, carbs]
//         console.log(data)
//     }



// let error

// export const getRequest = async (query) => {
//     ingr = query
//     const URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${ingr}`

//     try {const res = await axios.get(URL)
//             food = res.data.parsed[0].food.label
//             energy = res.data.parsed[0].food.nutrients.ENERC_KCAL
//             protein = res.data.parsed[0].food.nutrients.PROCNT.toFixed(1)
//             fat = res.data.parsed[0].food.nutrients.FAT.toFixed(1)
//             carbs = res.data.parsed[0].food.nutrients.CHOCDF.toFixed(1);                     
//             console.log(food, energy, protein, fat, carbs)
//             error = ''  
//         }
//         catch (err) {
//             console.log(`Fatal error of API: ${err}`)
//             error = `Something is wrong with your query`        
//         }
//     }
    
    



// the same without anxios: 

// export const getRequest = (query) => {
//     ingr = query

//     const URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${ingr}&nutrition-type=cooking`

//     fetch(URL)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(`fatal error of API: ${error}`))
// }

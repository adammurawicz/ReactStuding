import axios from "axios";
import { FAKE_POPULAR } from "./fake_data";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from './config'

export class TVShowAPI {
    static async fetchPopulars() {

        // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        // console.log(response.data.results);
        // return response.data.results
        return FAKE_POPULAR

    }
}
import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from './config'

export class TVShowAPI {
    static async fetchPopulars() {

        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        return response.data.results
        // return FAKE_POPULAR

    }

    static async fetchRecommendations(tvShowId) {
        const response = await axios.get(
          `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
        );
        return response.data.results;
        // return FAKE_RECOMMENDATIONS;
      }

    static async fetchByTitle(title) {
        const response = await axios.get(
          `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
        );
        return response.data.results;
        // return FAKE_RECOMMENDATIONS;
      }
}
import axios from "axios";
import {RANDOM_COCTAIL_API} from "./constants";

export const getRandomCoctail = async () => {
  return axios.get(RANDOM_COCTAIL_API)
}

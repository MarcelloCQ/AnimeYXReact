import axios from "axios";

const baseURL = 'https://api.jikan.moe/v4/anime/';
const full = '/full';


export const getAnimeIdFull = (id) => {
  return axios({
    method: 'GET',
    url: baseURL + id + full
  }).catch(error => console.log(error))
};
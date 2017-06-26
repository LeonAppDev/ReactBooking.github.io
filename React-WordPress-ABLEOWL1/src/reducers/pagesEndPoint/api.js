import { API } from 'setup/config';
import axios from 'axios';

export function loadPages() {
/*  return fetch(`${API}pages?page=2&per_page=5`)
    .then(res => res.json());*/

   return axios.get(`${API}pages?page=2&per_page=5`).then(res=>res);
}

export default {
  loadPages,
}

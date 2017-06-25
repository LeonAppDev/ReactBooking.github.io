import { API } from 'setup/config';

export function loadPages() {
  return fetch(`${API}pages?page=2&per_page=5`)
    .then(res => res.json());
}

export default {
  loadPages,
}

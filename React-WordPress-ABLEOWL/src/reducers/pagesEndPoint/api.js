import { API } from 'setup/config';

export function loadPages() {
  return fetch(`${API}pages`)
    .then(res => res.json());
}

export default {
  loadPages,
}

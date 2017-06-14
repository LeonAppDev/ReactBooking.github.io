import { API } from 'setup/config';

export function loadPosts() {
  return fetch(`${API}posts`)
    .then(res => res.json());
}

export default {
  loadPosts,
}

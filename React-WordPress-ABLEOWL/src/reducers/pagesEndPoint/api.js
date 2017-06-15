import { API } from 'setup/config';

// export function api(endPoint) {
//     return new Promise((resolve, reject) => {
//         axios.get(endPoint).then((response) => {
//             resolve(response.data);
//         }).catch((error) => {
//             reject(error);
//         });
//     });
// }
// export function getPages(cb){
//     this.api(`${API}pages`).then((response)=>{
//         this.getPosts(response, cb)
//     });
// }
// export function getPosts(pages, cb){
//     this.api(this.postsEndPoint).then((response)=>{
//         const posts 	= response
//         const payload 	= { pages, posts };
//
//         this.getSuccess(payload); // Pass returned data to the store
//         cb(payload); // This callback will be used for dynamic rout building
//     });
// }
export function loadPages() {
  return fetch(`${API}pages`)
    .then(res => res.json());
}

export default {
  loadPages,
}

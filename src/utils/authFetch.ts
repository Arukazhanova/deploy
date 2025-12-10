// export default async function authFetch(url: string, options: RequestInit = {}) {
//   const token = sessionStorage.getItem("jwt");

//   const headers = {
//     ...(options.headers || {}),
//     Authorization: token ? `Bearer ${token}` : "",
//     "Content-Type": "application/json",
//   };

//   return fetch(url, { ...options, headers });
// }

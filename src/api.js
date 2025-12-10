// export function authFetch(url, options = {}) {
//     const token = localStorage.getItem("token");

//     return fetch(url, {
//         ...options,
//         headers: {
//             ...options.headers,
//             "Authorization": `Bearer ${token}`,
//             "Content-Type": "application/json"
//         }
//     });
    
// }
// authFetch("http://localhost:8080/cars")
//     .then(r => r.json())
//     .then(data => console.log(data));



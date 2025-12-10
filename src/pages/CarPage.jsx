// import { useEffect, useState } from "react";

// export default function CarsPage() {

//     const [cars, setCars] = useState([]);

//     function authFetch(url, options = {}) {
//         const token = localStorage.getItem("token");

//         return fetch(url, {
//             ...options,
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`,
//                 ...options.headers
//             }
//         });
//     }

//     useEffect(() => {
//         authFetch("http://localhost:8080/cars")
//             .then(r => {
//                 if (r.status === 401 || r.status === 403) {
//                     alert("Вы не авторизованы!");
//                     window.location.href = "/login";
//                 }
//                 return r.json();
//             })
//             .then(data => setCars(data))
//             .catch(err => console.error(err));
//     }, []);

//     return (
//         <div>
//             <h1>Список машин</h1>

//             <ul>
//                 {cars.map(c => (
//                     <li key={c.id}>
//                         {c.brand} {c.model} ({c.year})
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

import type { Car } from "../types";
const CAR_URL = "http://localhost:8080/api/cars";


export const getCars = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(CAR_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return res.json();
};

export const addCar = async (car:Car) => {
  const token = localStorage.getItem("token");

  const res = await fetch(CAR_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(car),
  });

  return res.json();
};

export const updateCar = async (id:number, car:Car) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${CAR_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(car)
  });

  return res.json();
};

export const deleteCar = async (id:number) => {
  const token = localStorage.getItem("token");

  await fetch(`${CAR_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });
};

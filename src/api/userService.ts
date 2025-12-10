import type {  User } from "../types";
const BASE_URL = "http://localhost:8080/appUsers";
export const getUsers = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) throw new Error("Ошибка загрузки пользователей");

  return res.json();
};

export const addUser = async (user: User) => {
  const token = localStorage.getItem("token");

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(user)
  });

  if (!res.ok) throw new Error("Ошибка добавления пользователя");

  return res.json();
};

export const deleteUser = async (id:number) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) throw new Error("Ошибка удаления");
};

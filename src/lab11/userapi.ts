import type { AppUser } from "../types";

const BASE_URL = "http://localhost:8080/appUsers";

export async function getUsers(): Promise<AppUser[]> {
  const res = await fetch(BASE_URL);
  return await res.json();
}

export async function addUser(user: AppUser): Promise<AppUser> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}

export async function deleteUser(id: number) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}

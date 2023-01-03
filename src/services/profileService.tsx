import * as tokenService from "./tokenServices";

const BASE_URL = `http://localhost:3001/api/profiles`;

export async function getProfileDetails(profileId: string) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  });
  return await res.json();
}
export async function deleteVerse(id: number) {
  const res = await fetch(`${BASE_URL}/movie/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  });
  const data = await res.json();
  return data;
}

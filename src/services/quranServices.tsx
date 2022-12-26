import * as tokenService from "../services/tokenServices";

const BASE_URL = `http://localhost:3001/api/quran`;

type V={
  text: String,
  surah: {
    number: Number,
    name:String,
    englishName: String,
    englishNameTranslation: String,
    numberOfAyahs: Number,
    revelationType: String
  },
  juz: String,
  page: String,
}
export async function getVerse(num:number){
  console.log(num)
  const res = await fetch(`${BASE_URL}/${num}`) 
  const data = await res.json()
  return data
}
export async function getAll(){
  const res= await fetch(`${BASE_URL}`) 
  const data = await res.json()
  return data
}
export async function getSurah(surah:number){
  const res= await fetch(`${BASE_URL}/${surah}`) 
  const data = await res.json()
  return data
}
export async function saveVerse(verse:V) {
  const res = await fetch(`${BASE_URL}/save`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(verse),
  });
  const data = await res.json();
  return data;
}
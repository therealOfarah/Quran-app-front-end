const BASE_URL = `http://localhost:3001/api/quran/`;

export async function getVerse(num:number){
  const res = await fetch(`${BASE_URL}/${num}`) 
  const data = res.json()
  return data
}
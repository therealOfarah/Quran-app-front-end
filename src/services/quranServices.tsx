const BASE_URL = `http://localhost:3001/api/quran`;

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
const BASE_URL = `http://localhost:3001/api/quran`;

export async function getPrayerTimes(location:number[]){
  const res= await fetch(`${BASE_URL}/${location}`) 
  const data = await res.json()
  return data
}
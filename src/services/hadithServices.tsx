const BASE_URL = `http://localhost:3001/api/hadith`;

export async function getChapters(){
  const res= await fetch(`${BASE_URL}`) 
  const data = await res.json()
  return data
}
export async function getInfo(hadith:string) {
  const res= await fetch(`${BASE_URL}/${hadith}`) 
  const data = await res.json()
  console.log("data",data)
  return data
}
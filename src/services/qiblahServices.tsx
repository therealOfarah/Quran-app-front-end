const BASE_URL = `http://localhost:3001/api/qibla`;

export async function getPrayerTimes(date:string,lat:number,long:number){
  const info ={date,lat,long}
  const val=Object.values(info)
  const res= await fetch(`${BASE_URL}/${val}`) 
  const response = await res.json()
  const data = response.data
  return data
}
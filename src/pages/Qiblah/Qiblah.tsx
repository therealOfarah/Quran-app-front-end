import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as qiblaService from '../../services/qiblahServices'
function Qiblah() {
  const [locationTimes,setLocationTimes] = useState()
  const [prayerTimes,setPrayerTimes]=useState()
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const options = {
          method: 'GET',
          url: 'https://geocodeapi.p.rapidapi.com/GetNearestCities',
          params: {latitude:` ${position.coords.latitude}`, longitude: `${position.coords.longitude}`, range: '0'},
          headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': process.env.HOST_KEY
          }
        };
          axios(options)
          .then((Response:any)=>{
            const data = Response.data
            setLocationTimes(data[0])
          }).catch(error=>{
            console.log(error)
          })
        })
        function fetchPrayers (){
          async function getPrayers(locationTimes:any){
            const data = await qiblaService.getPrayerTimes(locationTimes)
            setPrayerTimes(data)
          }
        }
  },[])
  console.log(prayerTimes)
  return (
    <div>
      <>
      </>
    </div>
  );
}

export default Qiblah;
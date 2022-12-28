import React, { useEffect, useState } from 'react';
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
type Props={
  getRandomVerse:(num:number)=>void
  verse:any,
  saveVerse:(verse:V)=>void
}
function Home(props:Props) {
  const ver = props.verse
  useEffect(()=>{
    
    function generateRandomInteger(max:number) {
      return Math.floor(Math.random() * max) + 1;
    }
    let n1 = generateRandomInteger(6236);
    props.getRandomVerse(n1)
  },[])
  console.log(ver)
  return (
      <div>
      <h3 style={{fontSize:"40px",textAlign:"center",marginTop:"40vh"}}>{ver?.text}</h3>
      <p style={{fontSize:"40px",textAlign:"center",marginTop:"4vh"}}>{ver?.surah?.name}</p>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center", marginTop:"5vh",padding:"10px"}} className="buttons">
        <button type="button" className="btn btn-outline-success" style={{marginRight:"10px"}} onClick={()=>props.saveVerse(ver)}> Save verse </button>
        <audio src={ver?.audio} controls autoPlay={false}/>
      </div>
    </div>
  );
}

export default Home;
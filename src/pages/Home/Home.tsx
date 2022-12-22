import React, { useEffect, useState } from 'react';
type Props={
  getRandomVerse:(num:number)=>void
  verse:any
}
function Home(props:Props) {
  const random = props.getRandomVerse
  const ver = props.verse
  function generateRandomInteger(max:number) {
    return Math.floor(Math.random() * max) + 1;
  }
  let n1 = generateRandomInteger(6236);
  random(n1)
  console.log(ver)
  return (
    <div>
      <h3 style={{fontSize:"40px",textAlign:"center",marginTop:"40vh"}}>{ver.text}</h3>
      <p style={{fontSize:"40px",textAlign:"center",marginTop:"4vh"}}>{ver.surah.name}</p>
    </div>
  );
}

export default Home;
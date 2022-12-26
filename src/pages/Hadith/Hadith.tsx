import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as hadithService from '../../services/hadithServices'
type Props={
  hadith:any
  getHadithChapters:()=>void
}
function Hadith(props:Props) {
  const [hadithInfo, setHadithInfo]=useState()
  const hadith = props.hadith
  const getChapters=props.getHadithChapters
  useEffect(()=>{
    getChapters()
  },[])
  async function handleGetDetails(name:string){
    const info = await hadithService.getInfo(name)
    setHadithInfo(info)
  }
  console.log(hadithInfo)
  return (
    <div>
      {hadith?.data.map((chapter:any)=>
      // <button  key={chapter.id} onClick={()=> handleGetDetails(chapter.id)}>ok</button>
        <Link to={`/hadith/${chapter.id}`} key={chapter.id} state={hadithInfo}><h3 onClick={()=>handleGetDetails(chapter.id)}>{chapter.id}</h3></Link>
      )}
    </div>
  );
}

export default Hadith;


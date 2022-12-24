import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner'
type Props= {
  quran:any;
  getWholeQuran:()=>void
}
function Quran(props:Props) {
  const quran = props.quran
  const getWholeQuran = props.getWholeQuran()
  useEffect(()=>{
    // getWholeQuran()
  },[])

  return (
    <div>
      <>
      {quran === undefined || null 
      
      ?
      <FallingLines
      color="#4fa94d"
      width="100"
      visible={true}
    />
      : 
      <>
      {quran?.surahs.map((chap:any)=>
        <>
        {chap.ayahs?.map((verse:any)=>
          <>
          <h3 style={{textAlign:"center"}}>{verse.text}</h3>
          </>
        )}
        </>
      )}
      </>
      }
      </>
    </div>
  );
}

export default Quran;
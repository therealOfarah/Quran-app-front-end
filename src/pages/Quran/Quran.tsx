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
        <h3 style={{textAlign:"center",marginTop:"5px", backgroundColor:"lightgrey"}}>{chap.name}</h3>
        {chap.ayahs?.map((verse:any)=>
          <>
          {verse.text === "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" ? 
            <h3 style={{textAlign:"center", color:"lightgrey"}}>{verse.text}</h3> 
            :
            <h3 style={{textAlign:"end"}}>{verse.text}&#x06DD;</h3>
          }
          {/* {verse.text.includes('۞') === true ? '۞' :''} */}
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
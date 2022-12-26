import React from 'react';
import { useLocation } from 'react-router-dom';

function Surah() {
  const location = useLocation()
  const chap = location.state
  return (
    <div>
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
    </div>
  );
}

export default Surah;
import React from 'react';
import { Link } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner'
import Dropdown from 'react-bootstrap/Dropdown';

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
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Surah
          </Dropdown.Toggle>
          <Dropdown.Menu style={{maxHeight:"250px",overflow:"auto"}}>
      {quran?.surahs.map((chap:any)=>
        <>
          <Dropdown.Item><Link to={`/quran/${chap.name}`} state={chap}>{chap.name}</Link></Dropdown.Item>
        </>
      )}
      </Dropdown.Menu>
      </Dropdown>
      {quran?.surahs.map((chap:any)=>
        <>
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
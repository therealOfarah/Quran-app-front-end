import React from 'react';
import { useLocation } from 'react-router-dom';
function HadithChapters() {
  let location = useLocation()
  const hadith = location.state
  console.log(location)
  return (
    <div>
      <h3></h3>
    </div>
  );
}

export default HadithChapters;
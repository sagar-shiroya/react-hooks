import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const CreateArray = (length) => [...Array(length)];

function Star({selected, onSelect}) {
  return (
    <FaStar size='50' color={selected ? '#60D6F7' : 'lightgrey'} onClick={onSelect}/>
  );
}

function StarRating ({ totalStars }) {
    const [selectedStars, setSelectedStars] = useState(0);

    return(
      <>
      {CreateArray(totalStars).map((n,i)=>(
        <Star key={i} selected={selectedStars > i} 
        onSelect={()=>setSelectedStars(i+1)}/>))}
      <p>Selected {selectedStars} of {totalStars}</p>
      </>
    );
}

function App() {
  return(
    <>
      <h2>Ratings using useState hook</h2>
      <StarRating totalStars={5} />
    </>
  );
}

export default App
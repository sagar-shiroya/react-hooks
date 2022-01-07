import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const CreateArray = (length) => [...Array(length)];

function Star({selected, onSelect}) {
  return (
    <FaStar size='50' color={selected ? 'rgb(49, 255, 186)' : 'lightgrey'} onClick={onSelect}/>
  );
}

function StarRating ({ totalStars }) {
    const [selectedStars, setSelectedStars] = useState(0);

    return(
      <>
      {CreateArray(totalStars).map((n,i)=>(
        <Star key={i} selected={selectedStars > i} 
        onSelect={()=>setSelectedStars(i+1)}/>))}
      <p className='rating__text'>
        <span>Ratings: {selectedStars} of {totalStars}</span>
      </p>
      </>
    );
}

function App() {
  return(
    <>
      <h2>
        <span>Ratings using useState hook</span>
      </h2>
      <StarRating totalStars={5} />
    </>
  );
}

export default App
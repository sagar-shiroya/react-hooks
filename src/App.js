import React, { useState , useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

/**
 * useState Hook Starts... 
 */
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
/**
 * useState Hook Ends...
 */

/**
 * useEffect Starts here...
 */

function Congratulations() {
  const [name, setName] = useState("Sagar");
  const [admin, setAdmin] = useState(false);

  //Second parameter is useful in case of multiple state vars
  useEffect(() => {
    document.title = `Congratulations ${name}!`;
    console.log(`Congratulations ${name}`);
  }, [name]);

  useEffect(() => {
    console.log((admin)?'Logged In' : 'Not Logged in');
  }, [admin])

  return (
    <>
      <p>Congratulations {name}!</p>
      <button onClick={()=>setName("Mitali")}>Change Winner</button>

      <p>{(admin)?'Logged In' : 'Not Logged In'}</p>
      <button onClick={()=>setAdmin(!admin)}>{admin?'Log Out':'Log In'}</button>
    </>
  );
}

function GithubUsers() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(`https://api.github.com/users`)
    .then((response)=>response.json())
    .then(setData)
    // ;
    .then(console.log(data));
  },[]);

  if(data) {
    return ( 
    <>  
      <ul>
        {data.map((user)=>(
            <li key={user.id}>
              <a href={user.html_url} target='_blank'><img src={user.avatar_url} alt="" /></a>
              <span>{user.login}</span>
            </li>
          ))}
      </ul>
      <button onClick={()=>setData([])}>Remove Users</button>
    </>
  )}
}
/**
 * useEffect Ends here...
 */

function App() {
  return(
    <>
      <h2>
        <span>useState hooks</span>
      </h2>
      <StarRating totalStars={5} />
      <br/><hr/><br/>
      <h2>
        <span>useEffect hooks</span>
      </h2>
      <Congratulations />
      <br/><br/>
      <h4><span>Github Users</span></h4>
      <GithubUsers />
      <br/><hr/><br/>
      
    </>
  );
}

export default App
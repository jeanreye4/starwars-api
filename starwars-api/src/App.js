import './App.css';
import {useEffect, useState } from "react"
import { json } from 'react-router-dom';

function App() {
  const [starwars, setStarwars] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        "https://apiproject-production-3ac3.up.railway.app/characters"
      );
      const json = await response.json();
      setStarwars(json);
    };
    fetchCharacters();
  }, []);

  console.log(starwars)
  
  return (
    <>
      <h1>Starwars character information</h1>
      <div className='boxes'>
        {starwars.map((starwars) => ( 
          <div className='information'>
            <h3>{starwars.name}</h3> 
            <ul>
            <li>{starwars.gender}</li>
            <li>{starwars.birth_year}(year born)</li>
            <li>{starwars.height}(height cm)</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
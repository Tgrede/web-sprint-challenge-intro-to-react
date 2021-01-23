import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import CharacterList from './components/CharacterList'
import styled from 'styled-components'

export default function App() {
  const [people, setPeople] = useState([])

  useEffect(() => {
      axios.get(`https://swapi.dev/api/people/`)
      .then((res) => {
        const resultArr = res.data.results
        console.log(resultArr)
        setPeople(resultArr)
        })
      .catch(err => console.log(err))

  }, [])

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList people={people} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color: rgba(0,0,0,0.5);
`



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
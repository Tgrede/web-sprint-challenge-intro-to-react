

import React from 'react'
import Character from './Character'
import styled from 'styled-components'



export default function CharacterList(props){
     const {people} = props

     return(
          <StyledCharacterList>
               {people.map(person => {
                    return <Character key={person.url} person={person} />
               })}
               
          </StyledCharacterList>
     )
}

const StyledCharacterList = styled.div`
     display:flex;
     flex-direction:column;
     width:60%;
     font-size: 1.2rem;

     @media(max-width: 750px){
          width:90%;
     }
     
     
     
`


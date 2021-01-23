

import React, {useState} from 'react'
import styled from 'styled-components'
import Details from './Details'


export default function Character(props){
     const {person} = props
     const [currentPerson, setCurrentPerson] = useState(null)

     const openDetails = id => {
          setCurrentPerson(id)
     }

     const closeDetails = () => {
          setCurrentPerson(null)
     }
     return (
          <StyledCharacter>
               <StyledNameContainer>
                    <h2>{person.name}</h2> 
                    <StyledButton onClick={() => openDetails(person.url)}>See Details</StyledButton>
               </StyledNameContainer>
               {
                    currentPerson && <Details currentPerson={currentPerson} close={closeDetails} />
               }
          </StyledCharacter>     
     )
}

const StyledCharacter = styled.div`
     display:flex;
     color: white;
     border:1px solid white;
     border-radius:10px;
     background-color:rgba(0,0,0,.56);
     padding:1% 3% 4%;

     @media(max-width:750px){
          flex-direction:column;
     }
`;

const StyledNameContainer = styled.div`
     display:flex;
     flex-direction:column;
     align-items:flex-start;
     flex-shrink:0;
     padding-right:4%;

     @media(max-width:750px){
          padding-bottom:10px;
          align-items:center;
     }
`

const StyledButton = styled.button`
     box-shadow: 1px 1px grey;
     padding: 8px 14px;
     border: 1px solid white;
     border-radius: 8px;

     &:hover{
          box-shadow:2px 1px 2px grey;
     }
`

     
     
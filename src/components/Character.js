// Write your Character component here
import React from 'react'
import styled from 'styled-components'


export default function Character(props){
     const {person} = props

     return (
          <StyledCharacterTile>
               <p>
                 {person.name}   
               </p>
          </StyledCharacterTile>     
     )
}

const StyledCharacterTile = styled.div`
     display:flex;
     flex-direction:column;
     font-size: 1.5rem;
     box-align: center;
     width:75%;
     color: white;
     background-color: grey;
     opacity: .6
`;
     
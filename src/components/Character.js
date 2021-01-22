// Write your Character component here
// import React from 'react'
// import styled from 'styled-components'


// export default function Character(props){
//      const {person, action} = props

//      return (
//           <StyledCharacter>
//                <StyledName>{person.name}</StyledName> 
//                <button onClick={() => action(person.url)}>See Details</button>
//           </StyledCharacter>     
//      )
// }

// const StyledCharacter = styled.div`
//      display:flex;
//      flex-direction:column;
//      align-items:flex-start;
//      color: white;
//      justify-content:center;
// `;

// const StyledName = styled.h2`
//      opacity:1;
// `

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
                    <button onClick={() => openDetails(person.url)}>See Details</button>
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
`;

const StyledNameContainer = styled.div`
     display:flex;
     flex-direction:column;
     align-items:flex-start;
     flex-shrink:0;
     padding-right:4%;
`

     
     
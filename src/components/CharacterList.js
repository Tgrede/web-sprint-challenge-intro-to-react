// import React, {useState} from 'react'
// import Character from './Character'
// import styled from 'styled-components'
// import Details from './Details'


// export default function CharacterList(props){
//      const {people} = props
//      const [currentPerson, setCurrentPerson] = useState(null)

//      const openDetails = id => {
//           setCurrentPerson(id)
//      }

//      const closeDetails = () => {
//           setCurrentPerson(null)
//      }
//      return(
//           <StyledCharacterList>
//                {people.map(person => {
//                     return <Character key={person.url} person={person} action={openDetails} />
//                })}
//                {
//                     currentPerson && <Details currentPerson={currentPerson} close={closeDetails} />
//                }
//           </StyledCharacterList>
//      )
// }

// const StyledCharacterList = styled.div`
//      display:flex;
//      flex-direction:column;
//      /* align-items:flex-start; */
//      width:60%;
//      font-size: 1.2rem;
     
     
// `

import React, {useState} from 'react'
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
     /* align-items:flex-start; */
     width:60%;
     font-size: 1.2rem;
     border-radius:10px;
     
     
`




import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function Details(props){
     const {currentPerson, close} = props
     const [details, setDetails] = useState(null)


     useEffect(() => {
          axios.get(currentPerson)
          .then(res => {setDetails(res.data)})
          .catch(err => {debugger})
     }, [currentPerson])

     return(
          <div>
               {
               details && 
               <StyledDetails>
                    <StyledDetailElement><b>Name:</b> {details.name}</StyledDetailElement>
                    <StyledDetailElement><b>Gender:</b> {details.gender}</StyledDetailElement>
                    <StyledDetailElement><b>Height:</b> {details.height}</StyledDetailElement>
                    <StyledDetailElement><b>Mass:</b> {details.mass}</StyledDetailElement>
                    <StyledDetailElement><b>BirthYear:</b> {details.birth_year}</StyledDetailElement>
                    <StyledDetailElement><b>Eye Color:</b> {details.eye_color}</StyledDetailElement>
                    <StyledDetailElement><b>Skin Color:</b> {details.skin_color}</StyledDetailElement>
               </StyledDetails>
               }
               <StyledButton onClick={close}> Close</StyledButton>
          </div>
     )
}

const StyledDetails = styled.div`
     display:flex;
     flex-wrap: wrap;
     justify-content:space-evenly;
     border:1px solid white;
     border-radius: 15px;
     background-color:rgba(0,0,0,.62);
`

const StyledDetailElement = styled.p`
border: 1px solid white;
border-radius:5px;
padding:2%;
`

const StyledButton = styled.button`
     box-shadow: 1px 1px grey;
     margin-top:15px;
     padding: 10px 14px  8px;
     border: 1px solid white;
     border-radius: 8px;

     &:hover{
          box-shadow:2px 1px 2px grey;
     }
`




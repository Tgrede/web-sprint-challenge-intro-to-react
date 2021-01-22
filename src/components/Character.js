// Write your Character component here
import React from 'react'


export default function Character(props){
     const {person} = props

     return (
          <div>
               <p>
                 {person.name}   
               </p>
          </div>     
     )
}
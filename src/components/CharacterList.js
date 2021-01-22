import React from 'react'
import Character from './Character'

export default function CharacterList(props){
     const {people} = props
     return(
          <div>
               {people.map(person => {
                    return <Character key={person.url} person={person} />
               })}
          </div>
     )
}
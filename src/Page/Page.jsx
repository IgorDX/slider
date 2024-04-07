import React from 'react'
import { useRef, useState } from 'react'

export const Page = () => {
    const [people, setPeople] = useState([
        {id: 1, name: 'John Doe', content: 'lorem ipsum dolor sit amet'},
        {id: 2, name: 'Max Welters', content: 'lorem ipsum dolor sit amet'},
        {id: 3, name: 'Adam Smirth', content: 'lorem ipsum dolor sit amet'},
        {id: 4, name: 'Tom Jonson', content: 'lorem ipsum dolor sit amet'}
    ])
    const dragPerson =useRef(0);
    const draggedOverPerson = useRef(0)
    function handleSort(){
        const peopleClone = [...people]
        console.log(peopleClone)
        const temp = peopleClone[dragPerson.current]
        peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current]
        peopleClone[draggedOverPerson.current] = temp
        setPeople(peopleClone)
    }
    const handleDragStart = (index)=>{
        dragPerson.current = index;
    }
  return (
    <main>
        <h1>List</h1>
        {people.map((person, index)=>(
            <div key={person.id} draggable
            onDragStart={()=>(handleDragStart(index))}
            onDragEnter={()=> (draggedOverPerson.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}>
                <p>{person.name}</p>
            </div>
        ))}
    </main>
  )
}

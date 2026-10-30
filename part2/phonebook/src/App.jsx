import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
    
  }



  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const addName = (event) => {
  event.preventDefault()
  const newPerson = { name: newName , number: newPhone}
  const updatedPersons = persons.concat(newPerson)

  if (persons.some(persons => persons.name === newName)){
      console.log("Name already exists")
      alert(`${newName} is already added to phonebook`)
    }
  else {
    setPersons(updatedPersons)
    setNewName('')
    setNewPhone('')
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newFilter={newFilter}
        handleNewFilter={handleNewFilter}
      />

      <h2>add a new</h2>

      <PersonForm 
        newName = {newName}
        handleNameChange={handleNameChange}/>

      <form onSubmit={addName}>
        
        <div>number: <input 
          value = {newPhone}
          onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />

    </div>
  )
}

export default App
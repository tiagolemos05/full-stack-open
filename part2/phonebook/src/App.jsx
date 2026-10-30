import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'





const App = () => {

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [persons, setPersons] = useState([])
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
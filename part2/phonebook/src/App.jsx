import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'





const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const baseUrl = 'http://localhost:3001/persons'

  useEffect(() => {
    axios.get(baseUrl)
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPhone = () => {
    const phoneObject = {
      name: newName,
      number: newPhone
    }
    axios
      .post(baseUrl, phoneObject)
      .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewPhone('')
    })
  }

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

  if (persons.some(person => person.name === newName)){
      console.log("Name already exists")
      alert(`${newName} is already added to phonebook`)
    }
  else {
    addPhone()
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
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />

    </div>
  )
}

export default App

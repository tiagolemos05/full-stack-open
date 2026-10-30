import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , phone: '999999999'}
  ]) 

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
    
  }

  const addName = (event) => {
  event.preventDefault()
  const newPerson = { name: newName , phone: newPhone}
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
      <form onSubmit={addName}>
        <div>
          name: <input 
          value = {newName}
          onChange={handleNameChange}/>
        </div>
        <div>number: <input 
          value = {newPhone}
          onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map(person => (
            <li key={person.name}>
              <p>Name: {person.name}, Number: {person.phone}</p>
            </li>
          ))}
        </div>
    </div>
  )
}

export default App
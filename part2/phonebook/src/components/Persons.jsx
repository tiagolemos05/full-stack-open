const Persons = ({ persons, newFilter, deletePhones }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <ul>
        {filteredPersons.map(person => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deletePhones(person.id)}>delete</button>
        </li>
        ))}
    </ul>
  )
}

export default Persons
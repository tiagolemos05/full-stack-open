const Persons = ({ persons, newFilter }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <ul>
      {filteredPersons.map(person => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  )
}

export default Persons
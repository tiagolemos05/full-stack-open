const PersonForm = ({ newName, handleNameChange}) => {
  return (
    <div>
      <div>
        name: <input 
        value = {newName}
        onChange={handleNameChange}/>
      </div>
    </div>
    
  )
}

export default PersonForm
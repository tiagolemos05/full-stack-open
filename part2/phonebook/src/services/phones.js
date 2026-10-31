import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const addPhone = (newName, newPhone) => {
  const phoneObject = {
    name: newName,
    number: newPhone
  }

  return axios.post(baseUrl, phoneObject)
}

export default addPhone
import axios from 'axios'

const deletePhone = (phoneId) => {
  return axios.delete(`http://localhost:3001/persons/${phoneId}`)
}

export default deletePhone
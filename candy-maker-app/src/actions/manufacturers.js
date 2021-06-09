import axios from 'axios';

const fetchData = async () => {
  const { data } = await axios.get('http://localhost:8291/api/manufacturers/')

  return data
}

export default fetchData
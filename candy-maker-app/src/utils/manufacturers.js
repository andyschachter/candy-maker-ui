import fetchApiData from '../actions/manufacturers'

export const fetchData = async () => {
  const data = await fetchApiData()

  return data
}

export const filtered = (manufacturerData, searchTerm) => manufacturerData.filter(manufacturer => {
  return manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase())
})
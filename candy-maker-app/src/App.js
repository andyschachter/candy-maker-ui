import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search';
import { fetchData, filtered } from './utils/manufacturers'

function App() {

  const [manufacturerData, setManufacturerData] = useState([])
  const [foundManufacturers, setFoundManufacturers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {

      const data = await fetchData()

      setManufacturerData(data)
      setFoundManufacturers(data)
    }

    pullData()
  },[])

  useEffect(() => {

    const manufacturers = filtered(manufacturerData, searchTerm)

    setFoundManufacturers(manufacturers)

  }, [searchTerm, manufacturerData])

  return (
    <div>
      <Search 
      manufacturerDataAsProps={foundManufacturers}
      setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search';
import ErrorPage from './components/error';
import Candies from './components/products';
import { fetchData, filtered } from './utils/manufacturers'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <div>
            <Search 
              manufacturerDataAsProps={foundManufacturers}
              setSearchTerm={setSearchTerm}
              />
          </div>
        </Route>

        <Route path='/manufacturers/:id'>
          <div>
            <Candies
              candyDataAsProps={foundManufacturers}
            />
          </div>
        </Route>

        <Route path="*">
          <div><ErrorPage /></div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

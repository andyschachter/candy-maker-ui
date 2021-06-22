import React from 'react';
import { NavLink } from 'react-router-dom';

const Search = props => {

  const updateSearchTerm = (event) => {
    props.setSearchTerm(event.target.value)
  }

  return (
    
    <div className='App'>
      <h2>Candy Makers</h2>
      <input type="text" name="search" onChange={updateSearchTerm}/>
      {props.manufacturerDataAsProps.map(manu => {
        return (
          <>
          <div>
            <NavLink to={`/manufacturers/${manu.id}`}>{manu.name} ({manu.country})</NavLink>
          </div>
          </>
        )
      })}

    </div>


  )
}

export default Search
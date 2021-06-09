import React from 'react';

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
          <div>{manu.name} ({manu.country})</div>
          </>
        )
      })}

    </div>


  )
}

export default Search
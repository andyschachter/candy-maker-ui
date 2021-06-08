import React, {useState} from 'react';

const Search = () => {
  
  const [slug, setSlug] = useState('')

  const updateSlug = (event) => {
    setSlug(event.target.value)
  }

  return (
    
    <div className='App'>
      <h2>Candy Makers</h2>
      <input type="text" name="search" onChange={updateSlug}/>
      <div className='slug'>{slug}</div>
    </div>


  )
}

export default Search
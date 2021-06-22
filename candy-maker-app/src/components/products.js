import React from 'react';
import { useParams } from 'react-router-dom';

const Candies = (props) => {

  const {id} = useParams()

  const oneManu = props.candyDataAsProps.filter(product => {
    return product.id.toString() === id
  })

  const manufacturer = oneManu[0]
  console.log(manufacturer)

  console.log(manufacturer.products.name)

  return (
    <>
    <h2>
      {manufacturer.name}
    </h2>
    <h4>
      <ul>
        {manufacturer.products.map(candy => (
          <li key={candy.id}>
            {candy.name}
          </li>
        ))}
      </ul>
    </h4>
    <h5>
    <button href="/">return home</button>
    </h5>
    </>
  )
}

export default Candies
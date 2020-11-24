import React from 'react'

const Header = (props) => {
  const { id, name, status, price } = props.attributes
  const totalBicycles = props.bicycles.length
  return (
    <div className="wrapper">
      <h2>{id}</h2>
      <h2>{name}</h2>
      <h2>{status}</h2>
      <h2>{price}</h2>
      <div>
        <div className="TotalBicycles">{totalBicycles}</div>
      </div>
    </div>
  )
}

export default Header
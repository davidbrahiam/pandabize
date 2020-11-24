import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product'
import styled from 'styled-components'

const Home = styled.div`
  text-aling: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 200px;
  width: 100px;
  padding: 20px;
`

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Get all products
    axios.get('http://localhost:3009/api/v1/products')
      .then(resp => setProducts(resp.data.data))
      .catch(error => console.log(error))
  }, [products.length])

  const grid = products.map(item => {
    return (
      < Product key={item.attributes.id} attributes={item.attributes} />
    )
  })

  return (
    <Home>
      <Header>

      </Header>
      <div>

      </div>
      <Grid>{grid}</Grid>
    </Home>

  )
}
export default Products
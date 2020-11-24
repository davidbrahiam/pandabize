import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  brakground: #fff;
`
const ProductId = styled.div`
  width: 50px;
`
const ProductName = styled.div`
  padding 20px 0 10px 0;
`
const ProductStatus = styled.div`
  padding 20px 0 10px 0;
`
const ProductPrice = styled.div`
  padding 20px 0 10px 0;
`

const ProductLink = styled.div`
  margin 30px 0 20px 0;
  height: 50px;
  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decorate: none;
  }
`

const Product = (props) => {
  return (
    <Card >
      <ProductId>{props.attributes.id}</ProductId>
      <ProductName>{props.attributes.name}</ProductName>
      <ProductStatus>{props.attributes.status}</ProductStatus>
      <ProductPrice>{props.attributes.price}</ProductPrice>
      <ProductLink>
        <Link to={`/products/${props.attributes.id}`}>View Product</Link>
      </ProductLink>
    </Card >
  )
}

export default Product
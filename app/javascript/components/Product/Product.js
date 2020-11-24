import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import Header from './Header';
import BicycleForm from './BicycleForm';

const Product = (props) => {
  const [product, setProduct] = useState({})
  const [bicycle, setBicycle] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = props.match.params.id
    const url = `http://localhost:3009/api/v1/products/${id}`
    axios.get(url)
      .then(resp => {
        setProduct(resp.data)
        setLoaded(true)
      })
      .catch(error => error)
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setBicycle(Object.assign({}, bicycle, { [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    bicycle.product_id = product.data.id

    axios.post(`http://localhost:3009/api/v1/bicycles/`, { bicycle })
      .then(resp => {
        included = [...product.included, resp.data]
        setProduct({ ...product, included })
        setBicycle({ name: '', wheel_size: '', saddle_color: '', rim_color: '' })
      })
      .catch(error => console.log(error))
  }


  return (

    <div className="wrapper">
      {
        loaded &&
        <Fragment>
          <div className="column">

            <Header
              attributes={product.data.attributes}
              bicycles={product}
            />

            <BicycleForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={product.data.attributes}
              bicycle={bicycle}
            />
          </div>
          <div className="column"></div>
        </Fragment>
      }
    </div>
  )
}

export default Product
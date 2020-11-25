import React, { useEffect, useState } from 'react'
import { MDBCard, MDBCol, MDBRow, MDBContainer, MDBInput, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import axios from 'axios'

const Bicycle = (props) => {
  const [bike, setBike] = useState({})

  const handleChange = (e) => {
    e.preventDefault()
    setBike(Object.assign({}, bike, { [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `http://localhost:3009/api/v1/bicycles`
    const csrfToken = document.querySelector('[name=csrf-token').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post(url, bike)
      .then(resp => {
        if (resp.data.data.id != null) {
          setBike({
            mark: "", name: "", image: "", wheel_size: "",
            saddle_color: "", rim_color: "", total_available: "", price: ""
          })
        }
      })
      .catch(error => error)
  }

  return (
    <React.Fragment>
      <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={handleSubmit}>
              <p className="h5 text-center mb-4">Creating Bikes</p>
              <div className="grey-text">
                <MDBInput label="Bicycle Mark" onChange={handleChange} name="mark" value={bike.mark} type="text" success="right" />
                <MDBInput label="Bicycle Name" onChange={handleChange} name="name" value={bike.name} group type="text" validate />
                <MDBInput label="Bicycle Image" onChange={handleChange} name="image" value={bike.image} group type="text" validate />
                <MDBInput label="Wheel Size" onChange={handleChange} name="wheel_size" value={bike.wheel_size} group type="number" validate />
                <MDBInput label="Saddle Color" onChange={handleChange} name="saddle_color" value={bike.saddle_color} group type="text" validate />
                <MDBInput label="Rim Color" onChange={handleChange} name="rim_color" value={bike.rim_color} group type="text" validate />
                <MDBInput label="Total Available" onChange={handleChange} name="total_available" value={bike.total_available} group type="number" validate />
                <MDBInput label="Bicycle Price" onChange={handleChange} name="price" value={bike.price} group type="number" validate />
              </div>
              <div className="text-center">
                <MDBBtn type="submit" >Create</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  )
}

export default Bicycle
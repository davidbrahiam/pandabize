import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from
  'mdbreact';


const Index = (props) => {
  const [list, setListElements] = useState([])

  useEffect(() => {
    updateList()
  }, [])


  const updateList = () => {
    const url = `http://localhost:3009/api/v1/bicycles`
    axios.get(url)
      .then(resp => {
        setListElements(resp.data.data)
      })
      .catch(error => error)
  }

  const fields = [];

  const checkImage = (image) => {
    if (image == null) {
      return "https://coresites-cdn-adm.imgix.net/twc/wp-content/uploads/2015/02/funny-missing-bike-postes-notes-121.jpg?fit=crop"
    } else { image }
  }

  // Buy Operation
  const BuyOperation = (id) => {
    const url = `http://localhost:3009/api/v1/operations`
    const csrfToken = document.querySelector('[name=csrf-token').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post(url, { operation: { bicycle_id: id } })
      .then(resp => {
        updateList()
      })
      .catch(error => error)
  }

  list.forEach(element => fields.push(
    <MDBCard style={{ width: "20rem" }} key={element.id} className="ml-4 mt-3 mb-3">
      <MDBCardImage className="img-fluid" src={checkImage(element.attributes.image)} waves />
      <MDBCardBody>
        <MDBCardTitle>{element.attributes.mark} - {element.attributes.name}</MDBCardTitle>
        <MDBCardText>Wheel Size: {element.attributes.wheel_size}</MDBCardText>
        <MDBCardText>Rim Color: {element.attributes.wheel_size}</MDBCardText>
        <MDBCardText>Saddle Color: {element.attributes.wheel_size}</MDBCardText>
        <MDBCardText>TOTAL AVAILABLE: {element.attributes.total_available}</MDBCardText>
        <MDBCardText>Price: {element.attributes.price}</MDBCardText>
        <MDBBtn onClick={() => BuyOperation(element.id)} type="button">Buy It</MDBBtn>
      </MDBCardBody>
    </MDBCard>

  ))

  return (
    <Fragment>
      <MDBRow className="ml-4">
        {fields}
      </MDBRow>
    </Fragment>
  )
}

export default Index
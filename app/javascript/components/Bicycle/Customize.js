import React, { Fragment, useEffect, useState } from 'react'
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBCol, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBRow, MDBContainer, MDBInput, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import axios from 'axios'
const Customize = () => {
  const [marks, setMarks] = useState([])
  const [names, setNames] = useState([])
  const [prices, setPrices] = useState([])
  const [saddleColors, setSaddleColors] = useState([])
  const [rimColors, setRimColors] = useState([])
  const [wheelSizes, setWheelSizes] = useState([])
  const selectMarks = []
  const selectPrices = []
  const selectRimColors = []
  const selectSaddleColors = []
  const selectNames = []
  const selectWheelSizes = []
  const defaultBike = {
    mark: "Select Mark", name: "Select Name", wheel_size: "Select Wheel",
    rim_color: "Select Rim", saddle_color: "Select Saddle", price: "Select Price"
  }
  const [customBike, setCustomBike] = useState(defaultBike)

  useEffect(() => { getDistinctProperties([], "mark") }, [])

  const getDistinctProperties = (fields, distinct) => {
    const url = `http://localhost:3009/api/v1/bicycles_query`
    const csrfToken = document.querySelector('[name=csrf-token').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    axios.post(url, { fields: fields, distinct: distinct })
      .then(resp => {
        if (resp.data.mark != null) {
          setMarks(resp.data.mark)
        } else if (resp.data.name != null) {
          setNames(resp.data.name)
        } else if (resp.data.wheel_size != null) {
          setWheelSizes(resp.data.wheel_size)
        } else if (resp.data.rim_color != null) {
          setRimColors(resp.data.rim_color)
        } else if (resp.data.saddle_color != null) {
          setSaddleColors(resp.data.saddle_color)
        } else if (resp.data.price != null) {
          setPrices(resp.data.price)
        }
      })
      .catch(error => error)
  }

  const selectMarkName = (name) => {
    setCustomBike(Object.assign({}, defaultBike, { mark: name }))
    getDistinctProperties([{ mark: name }], "name")
  }

  const selectName = (name) => {
    setCustomBike(Object.assign({}, customBike, { name: name }))
    getDistinctProperties([{ mark: customBike.mark, name: name }], "wheel_size")
  }

  const selectWheelSize = (wheel_size) => {
    setCustomBike(Object.assign({}, customBike, { wheel_size: wheel_size }))
    getDistinctProperties([{ mark: customBike.mark, name: customBike.name, wheel_size: wheel_size }], "rim_color")
  }

  const selectRimColor = (rim_color) => {
    setCustomBike(Object.assign({}, customBike, { rim_color: rim_color }))
    getDistinctProperties([{
      mark: customBike.mark, name: customBike.name, wheel_size: customBike.wheel_size,
      rim_color: rim_color
    }], "saddle_color")
  }

  const selectSaddleColor = (saddle_color) => {
    setCustomBike(Object.assign({}, customBike, { saddle_color: saddle_color }))
    getDistinctProperties([{
      mark: customBike.mark, name: customBike.name, wheel_size: customBike.wheel_size,
      rim_color: customBike.rim_color, saddle_color: saddle_color
    }], "price")
  }

  const selectPrice = (price) => {
    setCustomBike(Object.assign({}, customBike, { price: price }))
  }

  const isMarkSelected = () => {
    if (customBike.mark != "Select Mark") {
      return (
        <Fragment>
          <MDBCardText>Select Name</MDBCardText>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">{customBike.name}</MDBDropdownToggle>
            <MDBDropdownMenu basic>
              {selectNames}
            </MDBDropdownMenu>
          </MDBDropdown>
        </Fragment>
      )
    }
  }

  const isNameSelected = () => {
    if (customBike.name != "Select Name") {
      return (
        <Fragment>
          <MDBCardText>Select Wheel Size</MDBCardText>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">{customBike.wheel_size}</MDBDropdownToggle>
            <MDBDropdownMenu basic>
              {selectWheelSizes}
            </MDBDropdownMenu>
          </MDBDropdown>
        </Fragment>
      )
    }
  }

  const isWheelSizeSelected = () => {
    if (customBike.wheel_size != "Select Wheel") {
      return (
        <Fragment>
          <MDBCardText>Select Rim Color</MDBCardText>
          <MDBDropdown>
            <MDBDropdownToggle caret>{customBike.rim_color}</MDBDropdownToggle>
            <MDBDropdownMenu basic>
              {selectRimColors}
            </MDBDropdownMenu>
          </MDBDropdown>
        </Fragment>
      )
    }
  }

  const isRimColorSelected = () => {
    if (customBike.rim_color != "Select Rim") {
      return (
        <Fragment>
          <MDBCardText>Select Saddle Color</MDBCardText>
          <MDBDropdown>
            <MDBDropdownToggle caret>{customBike.saddle_color}</MDBDropdownToggle>
            <MDBDropdownMenu basic>
              {selectSaddleColors}
            </MDBDropdownMenu>
          </MDBDropdown>
        </Fragment>
      )
    }
  }

  const isSaddleColorSelected = () => {
    if (customBike.saddle_color != "Select Saddle") {
      return (
        <Fragment>
          <MDBCardText>Select Price</MDBCardText>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">{customBike.price}</MDBDropdownToggle>
            <MDBDropdownMenu basic>
              {selectPrices}
            </MDBDropdownMenu>
          </MDBDropdown>
        </Fragment>
      )
    }
  }

  const isPriceSelected = () => {
    if (customBike.price != "Select Price") {
      return (
        <MDBBtn type="button" onClick={() => BuyOperation()}>Buy</MDBBtn>
      )
    }
  }

  // Buy Operation
  const BuyOperation = () => {
    const url = `http://localhost:3009/api/v1/operations`
    const csrfToken = document.querySelector('[name=csrf-token').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post(url, { operation: customBike })
      .then(resp => {
        if (resp.data.success != null) {
          setCustomBike(defaultBike)
        }
      })
      .catch(error => error)
  }

  rimColors.forEach(element => selectRimColors.push(
    <MDBDropdownItem active={element == customBike.rim_color} key={element} onClick={() => { selectRimColor(element) }}> {element}</MDBDropdownItem >
  ))

  prices.forEach(element => selectPrices.push(
    <MDBDropdownItem active={element == customBike.price} key={element} onClick={() => { selectPrice(element) }}>{element}</MDBDropdownItem>
  ))
  saddleColors.forEach(element => selectSaddleColors.push(
    <MDBDropdownItem active={element == customBike.saddle_color} key={element} onClick={() => { selectSaddleColor(element) }}> {element}</MDBDropdownItem >
  ))

  wheelSizes.forEach(element => selectWheelSizes.push(
    <MDBDropdownItem active={element == customBike.wheel_size} key={element} onClick={() => { selectWheelSize(element) }}>{element}</MDBDropdownItem>
  ))

  names.forEach(element => selectNames.push(
    <MDBDropdownItem active={element == customBike.name} key={element} onClick={() => { selectName(element) }}>{element}</MDBDropdownItem>
  ))

  marks.forEach(element => selectMarks.push(
    <MDBDropdownItem active={element == customBike.mark} key={element} onClick={() => { selectMarkName(element) }}>{element}</MDBDropdownItem>
  ))
  return (
    <MDBContainer className="mt-4">
      <MDBRow>
        <MDBContainer>
          <MDBRow>
            <MDBCol style={{ width: "20rem" }}>
              <MDBCardText>Select Mark</MDBCardText>
              <MDBDropdown>
                <MDBDropdownToggle caret color="primary">{customBike.mark}</MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  {selectMarks}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
            <MDBCol style={{ width: "20rem" }}>{isMarkSelected()}</MDBCol>
            <MDBCol style={{ width: "20rem" }}>{isNameSelected()}</MDBCol>
            <MDBCol style={{ width: "20rem" }}>{isWheelSizeSelected()}</MDBCol>
            <MDBCol style={{ width: "20rem" }}>{isRimColorSelected()}</MDBCol>
            <MDBCol style={{ width: "20rem" }}>{isSaddleColorSelected()}</MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol style={{ width: "20rem" }}>
              {isPriceSelected()}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBRow>
    </MDBContainer>
  )
}

export default Customize
import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBContainer, MDBInput, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';

const EditUser = (props) => {
  const changePage = () => {
    props.handlePage("Home")
  }

  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={props.handleUpdateUser}>
              <p className="h5 text-center mb-4">User info</p>
              <div className="grey-text">
                <MDBInput label="Type your name" onChange={props.handleChange} name="name" valueDefault={props.newUser.name} value={props.newUser.name} icon="person" group type="text" validate error="wrong"
                  success="right" />

                <MDBInput label="Type your email" onChange={props.handleChange} name="email" valueDefault={props.newUser.email} value={props.newUser.email} icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="New password" onChange={props.handleChange} name="password" value={props.newUser.password} icon="lock" group type="password" validate />
                <MDBInput label="Confirmation password" onChange={props.handleChange} name="password_confirmation" value={props.newUser.password_confirmation} icon="lock" group type="password" validate />
                <MDBInput label="Type your CURRENT PASSWORD to Apply the changes" onChange={props.handleChange} name="current_password" value={props.newUser.current_password} icon="lock" group type="password" validate />
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Save</MDBBtn>
                <MDBBtn color="indigo" type="button" onClick={changePage}>Cancel</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  )
}

export default EditUser
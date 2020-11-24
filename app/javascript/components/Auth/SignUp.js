import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBContainer, MDBInput, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';

const SignUp = (props) => {
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={props.handleSubmit}>
              <p className="h5 text-center mb-4">Sign Up</p>
              <div className="grey-text">
                <MDBInput label="Type your name" onChange={props.handleChange} name="name" value={props.newUser.name} icon="person" group type="text" validate error="wrong"
                  success="right" />

                <MDBInput label="Type your email" onChange={props.handleChange} name="email" value={props.newUser.email} icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Type your password" onChange={props.handleChange} name="password" value={props.newUser.password} icon="lock" group type="password" validate />
                <MDBInput label="Confirm your password" onChange={props.handleChange} name="confirmation_password" value={props.newUser.confirmation_password} icon="lock" group type="password" validate />
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Sign Up</MDBBtn>
                <MDBBtn color="indigo" type="button" onClick={props.toggleSignUpLogin}>Sign In</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  )
}

export default SignUp
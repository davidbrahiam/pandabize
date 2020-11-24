import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBContainer, MDBInput, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';

const Login = (props) => {
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={props.handleSubmit}>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput label="Type your email" onChange={props.handleChange} name="email" value={props.user.email} icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Type your password" onChange={props.handleChange} name="password" value={props.user.password} icon="lock" group type="password" validate />
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Login</MDBBtn>
                <MDBBtn color="indigo" type="button" onClick={props.toggleSignUpLogin}>SignUp</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  )
}

export default Login
import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCol, MDBRow, MDBContainer, MDBInput, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon, MDBNav } from 'mdbreact';
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import NavPage from './NavPage'
import EditUser from '../User/Edit'
import axios from 'axios'
import Index from './Index';
import Bicycle from '../Bicycle/Bicycle';
import Customize from '../Bicycle/Customize';

const Home = (props) => {
  const [toggleSignUpLogin, setToggleSignUpLogin] = useState(false)
  const [user, setUser] = useState({})
  const [editUser, setEditUser] = useState({})
  const [page, setPage] = useState("Home")
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const url = `http://localhost:3009/users/sign_in`
    axios.get(url)
      .then(resp => {
        if (resp.data.user == null) { setLoggedIn(false) }
        else {
          setUser(Object.assign({ session: resp.data.token }, resp.data.user, {}))
          setEditUser(Object.assign({ session: resp.data.token }, resp.data.user, {}))
          setLoggedIn(true)
        }
      })
      .catch(error => error)
  }, [])

  // LoginSignUp Form Handle
  const handleLoginSignUpChange = (e) => {
    e.preventDefault()
    setUser(Object.assign({}, user, { [e.target.name]: e.target.value }))
  }

  // EditUser form Handle
  const handleEditUserChange = (e) => {
    e.preventDefault()
    setEditUser(Object.assign({}, editUser, { [e.target.name]: e.target.value }))
  }

  // Login Handle
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `http://localhost:3009/users/sign_in`
    const csrfToken = document.querySelector('[name=csrf-token').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post(url, { user })
      .then(resp => {
        if (resp.data.user != null) {
          setUser(Object.assign({ session: resp.data.token }, resp.data.user, {}))
          setLoggedIn(true)
        }
      })
      .catch(error => error)
  }

  // LogOut Handle
  const handleLogOut = (e) => {
    e.preventDefault()
    const url = `http://localhost:3009/users/sign_out`

    axios.get(url, user)
      .then(resp => {
        setLoggedIn(false)
        setUser({})
      })
      .catch(error => error)
  }

  // Create User
  const handleCreateUser = (e) => {
    e.preventDefault()
    const url = `http://localhost:3009/users`
    const csrfToken = document.querySelector('[name=csrf-token').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post(url, { user })
      .then(resp => {
        if (resp.data.user != null) {
          setUser(Object.assign({ session: resp.data.token }, resp.data.user, {}))
          setLoggedIn(true)
        }
      })
      .catch(error => error)
  }

  // Update User
  const handleUpdateUser = (e) => {
    e.preventDefault()
    const url = `http://localhost:3009/users`
    const csrfToken = document.querySelector('[name=csrf-token').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.put(url, { account_update: Object.assign({}, user, editUser) })
      .then(resp => {
        if (resp.data.user != null) {
          setUser(Object.assign({ session: resp.data.token }, resp.data.user, {}))
          setEditUser(Object.assign({ session: resp.data.token }, resp.data.user, {}))
          changePage("Home")
          setLoggedIn(true)
        }
      })
      .catch(error => error)
  }

  // Toggle SignUp/Login
  const toggleSignUpLoginButton = (e) => {
    e.preventDefault()
    setToggleSignUpLogin(!toggleSignUpLogin)
  }

  const changePage = (value) => {
    setPage(value)
  }

  const switchPage = (value) => {
    switch (value) {
      case "EditUser":
        return <EditUser newUser={editUser} handleChange={handleEditUserChange} handlePage={changePage} handleUpdateUser={handleUpdateUser} />
      case "Customize":
        return <Customize handlePage={changePage} />
      case "Bicycle":
        return <Bicycle />
      default:
        return <Index />
    }
  }

  const Check = () => {
    if (loggedIn == false) {
      if (toggleSignUpLogin == false) {
        return <Login
          handleChange={handleLoginSignUpChange}
          handleSubmit={handleSubmit}
          toggleSignUpLogin={toggleSignUpLoginButton}
          user={user}
        />;
      } else {
        return <SignUp
          handleChange={handleLoginSignUpChange}
          handleSubmit={handleCreateUser}
          toggleSignUpLogin={toggleSignUpLoginButton}
          newUser={user}
        />;
      }
    } else {
      return (
        <React.Fragment>
          <NavPage logOut={handleLogOut} handlePage={changePage} user={user}></NavPage>
          {switchPage(page)}
        </React.Fragment>
      )
    }
  }

  return (
    <React.Fragment>
      {Check()}
    </React.Fragment>
  )
}

export default Home
import React, { useState } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

const NavbarPage = (props) => {
  const [state, setState] = useState({ isOpen: false })

  const toggleCollapse = () => {
    setState({ isOpen: !state.isOpen });
  }
  const changePage = (page) => {
    props.handlePage(page)
  }

  const isAdmin = (role) => {
    if (role == "admin") return (
      <MDBNavItem>
        < MDBNavLink to="#!" onClick={() => changePage("Bicycle")}>Bicycle</MDBNavLink>
      </MDBNavItem>
    )
  }

  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Pandabize</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!" onClick={() => changePage("Home")}>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" onClick={() => changePage("Customize")}>Customize</MDBNavLink>
            </MDBNavItem>
            {isAdmin(props.user.role)}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!" onClick={() => changePage("EditUser")}>Edit User</MDBDropdownItem>
                  <MDBDropdownItem href="#!" onClick={() => props.logOut}>Log Out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router >
  );
}

export default NavbarPage;

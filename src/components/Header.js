import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Button,
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';

function Header(args) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleSignout = () => {
    localStorage.clear();
    navigate("/auth/login")
  }


  return (
    <div>
      <Navbar {...args} expand="lg" className="shadow mb-3">
        <NavbarBrand>MERN STACK BOOTCAMP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="d-flex justify-content-between">
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">
              HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cart" className="nav-link">
              CART
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/checkout" className="nav-link">
              CHECKOUT
              </NavLink>
            </NavItem>
          </Nav>
          <Button color="primary" onClick={handleSignout}>Signout</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
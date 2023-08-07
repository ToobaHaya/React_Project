import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsBagFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavigationBar() {
    const [showCart, setShowCart] = useState(false);

  const handleCartButtonClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };
  return (
    <>
      <Navbar expand="lg" className="py-3 shadow-sm  text-white border-bottom border-bottom-dark py-2">
        <Container>
          <Link className="navbar-brand text-dark" to="/">
            <b>
              <BsBagFill /> Modest Store
            </b>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/products">
                Products
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="ms-4 btn btn-outline-dark" to="/signup">
                SignUp
              </Link>
            
              <span className="nav-link" onClick={handleCartButtonClick}>
                <FaShoppingCart />
              </span>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavigationBar;




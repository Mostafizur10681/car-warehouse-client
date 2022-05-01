import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className='navbar-items' to='/' >
                    <img width='60' src={logo} alt="" srcset="" />
                    Car WareHouse
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Link className='navbar-items' to="/features">Features</Link>
                        <Link className='navbar-items' to='/blogs'>Blogs</Link>
                        <Link className='navbar-items' to="/deets">More deets</Link>
                        <Link className='navbar-items' eventKey={2} to="/login">
                            <button className='btn btn-success'>Login</button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
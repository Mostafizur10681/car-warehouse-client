import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className='navbar-items' to='/' >React Bootstrap</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='navbar-items' to="/features">Features</Link>
                        <Link className='navbar-items' to='/blogs'>Blogs</Link>
                    </Nav>
                    <Nav>
                        <Link className='navbar-items' to="/deets">More deets</Link>
                        <Link className='navbar-items' eventKey={2} to="/login">
                            Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
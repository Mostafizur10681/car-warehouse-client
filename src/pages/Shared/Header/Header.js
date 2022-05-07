import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
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
                        <Link className='navbar-items' to='/blogs'>Blogs</Link>
                        {
                            user ?
                                <Link className='navbar-items' eventKey={2} to="/inventory">Manage Inventory</Link>
                                :
                                ''
                        }
                        {
                            user ?
                                <Link className='navbar-items' eventKey={2} to="/addItem">Add Item</Link>
                                :
                                ''
                        }
                        {
                            user ?
                                <Link className='navbar-items' eventKey={2} to="/myItem">My Items</Link>
                                :
                                ''
                        }

                        {
                            user ?
                                <button onClick={logout} className='btn btn-danger ms-2'>Sign Out</button> :
                                <Link className='navbar-items' eventKey={2} to="/login">
                                    <button className='btn btn-success'>Login</button>
                                </Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
import { signOut } from 'firebase/auth';
import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar className="bgColor" expand="lg">
                <Container>
                    <Navbar.Brand as={ Link } className="logo" to="/">Watch Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link className="mx-3 navlink" as={ Link } to="/">Home</Nav.Link>
                            <Nav.Link className="mx-3 navlink" as={ Link } to="/blog">Blog</Nav.Link>
                            <Nav.Link className="mx-3 navlink" href="#Inventory">Inventory Items</Nav.Link>
                            {/* <Nav.Link className="mx-3 navlink" as={ Link } to="/inventory">Inventory</Nav.Link> */ }
                            {
                                user && <>
                                    <Nav.Link as={ Link } className="mx-3 navlink" to="/insertwatch">Add Items</Nav.Link>
                                    <Nav.Link as={ Link } className="mx-3 navlink" to="/manageInventory">Manage Items</Nav.Link>
                                    <Nav.Link as={ Link } className="mx-3 navlink" to="/myitems">My Items</Nav.Link>
                                    {/* <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                                <Nav.Link as={Link} to="orders">Orders</Nav.Link> */}
                                </>
                            }
                            {
                                user ?
                                    <Nav.Link className="mx-3 navlink" onClick={ handleSignOut }>Sign Out</Nav.Link>
                                    :
                                    <Nav.Link className="mx-3 navlink" as={ Link } to="/signin">Sign In</Nav.Link> }

                            {
                                !user && <>
                                    <Nav.Link className="mx-3 navlink" as={ Link } to="/signup">Sign Up</Nav.Link>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;
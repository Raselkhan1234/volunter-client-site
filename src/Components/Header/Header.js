import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../../logos/Group 1329.png';
import './Header.css';


const Header = () => {
    return (

        <Container className="header-container">
            <Navbar>
                <Navbar.Brand href="#home"><img src={logo1} alt="" /></Navbar.Brand>
                <Nav>
                    <Link to="home"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Nav.Link href="#donation">Donation</Nav.Link>
                    <Nav.Link href="#events">Events</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                </Nav>
                <div className="container-btn">
                <Link to="/event/:productId"><Button  variant="primary">Register</Button></Link>
                <Link to="admin"><Button variant="dark">Admin</Button></Link>
                </div>
            </Navbar>
            <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <Form inline >
                <FormControl type="text" placeholder="Search" className="sm-2" />
                <Button className="header-btn" variant="primary">Search</Button>
            </Form>
        </Container>

    );
};

export default Header;
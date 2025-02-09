import React from 'react';
import { Navbar, Nav, Container, Button }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the custom CSS file

const App = () => {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand">UJOS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#pricing">PRICINGOUR WORK</Nav.Link>
              <Nav.Link href="#chat">CHAT</Nav.Link>
              <Nav.Link href="#marketing">MARKTING</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#brand">BRAND IDNETITY</Nav.Link>
              <Nav.Link href="#website">WEBSITE DESIGN</Nav.Link>
              <Nav.Link href="#ads">ADSCAMPAIGN</Nav.Link>
              <Nav.Link href="#scope">ENTIRE SCOPE OF SERVICE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-content">
        <Container>
          <div className="sale-timer">Our Huge Sale Ends in00:0</div>
          <h1 className="special-heading">Special!</h1>
          <p className="offer-text">
            Everything to bring your brand into the<br />
            hands of customers with ease
          </p>
          <Button variant="primary" className="cta-button">
            Get started
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default App;
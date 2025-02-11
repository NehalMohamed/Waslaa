import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown, Row, Col } from 'react-bootstrap';
import { FaCommentDots, FaBullhorn} from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { FiUser } from 'react-icons/fi';
import { CiGlobe,CiMenuFries } from 'react-icons/ci';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.scss';

const Home = () => {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 60);
    return date;
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Container fluid className="p-0">
      {/* Navbar */}
      <Navbar fixed="top" expand="lg" className="navbar-custom py-3">
        <Navbar.Brand href="#" className="brand d-flex align-items-center">
          <img src="logo/wasla logo.png" alt="Logo" className="logo" />
        </Navbar.Brand>
        <Nav className="nav-items d-none d-lg-flex">
          <Nav.Link href="#" className="nav-item">HOME</Nav.Link>
          <Nav.Link href="#" className="nav-item">PRICING</Nav.Link>
          <Nav.Link href="#" className="nav-item">OUR WORK</Nav.Link>
        </Nav>
        <div className="ms-auto d-flex gap-3 align-items-center nav-icons">
          <GoSearch className="icon" />
          <FiUser className="icon" />
          <CiGlobe className="icon" />
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="dropdown-toggle-custom">
              <CiMenuFries  className="icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="dropdown-menu-custom" >
            <Row className="">
              <Col md={6} className="">
                <Dropdown.Item href="#" className="dropdown-item-custom"><FaCommentDots className="me-2" /> CHAT</Dropdown.Item>
              </Col>
              <Col md={6} className=""> 
                <Dropdown.Item href="#" className="dropdown-item-custom"><FaBullhorn className="me-2" /> MARKETING</Dropdown.Item>
              </Col>
            </Row>
            <Row className="">
              <Col md={6} className="">
                <Dropdown.Item href="#" className="dropdown-item-custom"><FaCommentDots className="me-2" /> CHAT</Dropdown.Item>
              </Col>
              <Col md={6} className=""> 
                <Dropdown.Item href="#" className="dropdown-item-custom"><FaBullhorn className="me-2" /> MARKETING</Dropdown.Item>
              </Col>
            </Row>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
      {/* Fixed Sale Navbar with Countdown */}
      <Navbar fixed="top" className="sale-navbar py-2">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <span className="sale-text">Our Huge <span className="highlight">Sale Ends in</span></span>
          <div className="countdown-timer">
          {`${timeLeft.days} : ${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`} 
            <div className="countdown-labels"><span className="countdown-label">Days</span><span className="countdown-label">Hrs</span><span className="countdown-label">Mins</span><span className="countdown-label">Secs</span></div>
          </div>
          <Button className="check-button">Check it out</Button>
        </Container>
      </Navbar>
      <Container className="content-section">
      {/* Hero Section */}
        <Container className="hero-section">
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="hero-heading">Make your <br/>Brand <span className="highlight">Special!</span></h1>
              <p className="hero-text">Everything to bring your brand into the <br/>hands of customers with ease</p>
              <Button className="cta-button">Get Started</Button>
            </Col>
            <Col md={6} className="text-center">
              <img src="images/webs3.png" alt="Illustration" className="illustration" />
            </Col>
          </Row>
        </Container>

        {/* Services Section */}
        <Container className="services-section">
          <Row className="service-item align-items-center mb-4">
            <Col md={7}>
              <h3 className="service-title">Design your brand identity</h3>
              <p className="service-description">Do you have the project idea but <br/>need to create your identity from  <br/>the name to the marketing<br/> stage?</p>
            </Col>
            <Col md={5} className="text-center">
              <img src="images/confused.png" alt="Brand Identity" className="illustration" />
            </Col>
          </Row>
        </Container>

        <Container>  
          <Row className="service-item align-items-left">
           
            <Col md={6} className="design-text">
              <h3 className="design-title">Design your website</h3>
              <p className="design-description">Make your brand more <br/>widespread and facilitate access <br/>to your products.</p>
            </Col>
            <Col md={6} className="text-left">
              <img src="images/web-design.png" alt="Website Design" className="service-img" />
            </Col>
          </Row>
          <Row className="service-item-designers align-items-left">
            <Col md={6}>
              <h3 className="design-title">Contact our creative designers</h3>
              <p className="design-description">Creative team for designing your <br/>business identity.</p>
            </Col>
            <Col md={6} className="text-left">
              <img src="images/design-award2.png" alt="Website Design" className="service-img2" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="service-item align-items-center">
            <Col md={7}>
              <h3 className="service-title">Market to your business identity</h3>
              <p className="service-description">A specialized team is responsible <br/>for marketing your brand identity  <br/>and ensuring its success.</p>
            </Col>
            <Col md={5} className="text-center">
              <img src="images/social-media.png" alt="Business Marketing" className="identity-img" />
            </Col>
          </Row>
        </Container>


       {/* New Section
       <Container fluid className="new-section py-5">
        <Row>
          <Col md={6} className="text-section">
            <h2>Waslaa aims to make your brand successful</h2>
            <p>through the access of your customers to your brand with ease.</p>
            <Button className="cta-button">Get started</Button>
          </Col>
          <Col md={6} className="image-section text-center">
            <img src="/section-image.png" alt="Section Illustration" className="section-illustration" />
          </Col>
        </Row>
      </Container> */}

      {/* Footer */}
      <footer className="footer py-4">
        <Container>
        <hr />
          <Row>
            <Col md={4} className="footer-logo">
              <img src="/logo/wasla logo.png" alt="Logo" className="footer-logo-img" />
              <p className="small-text">Waslaa aims to make your brand successful through the access of your customers to your brand with ease.</p>
            </Col>
            <Col md={4} className="footer-links">
              <h5>Company</h5>
              <ul>
                <li className="small-text">Home</li>
                <li className="small-text">About</li>
                <li className="small-text">Pricing</li>
                <li className="small-text">Contact</li>
                <li className="small-text">Privacy</li>
              </ul>
            </Col>
            <Col md={4} className="footer-support">
              <h5>Support</h5>
              <ul>
                <li className="small-text">Help Center</li>
                <li className="small-text">Chat with us</li>
              </ul>
              <h5>Our New</h5>
              <p className="small-text">#Link_it_with_waslaa</p>
            </Col>
          </Row>
          <hr />
          <p className="text-left small-text">Copyright © Waslaa Inc. 2024-2025 - All Rights Reserved</p>
        </Container>
      </footer>

      </Container>
    </Container>
  );
};

export default Home;

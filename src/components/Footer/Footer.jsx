import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
 
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className="mb-4" md='6'>
          <div className="logo">
              <div>
                <h1 style={{color: '#2879fe'}}>HEAL'N'GLOW</h1>
              </div>
          </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nihil alias. Animi autem corrupti vel deserunt veniam iste officiis rem.
              </p>
          </Col>

          <Col lg='3' md='3' className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Cream</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Facewash</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Serum</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='3' className="mb-4">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>29th Main Road, BTM Layout, Bangalore</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                <span><i class="ri-phone-line"></i></span>
                  <p>+91 1234567890</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  <p>healnglow@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                <span><i class="ri-instagram-line"></i></span>
                  <p>@HEALWITHNANDITA</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer__copyright">© Copyright {year}. All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
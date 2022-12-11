import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Row,
  Col,
} from 'reactstrap';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const links = ['Trading', 'Archive'];
  return (
    <Row>
      <Col>
        <Navbar>
          <NavbarBrand>SPA Simulator</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              {links.map((link) => (
                <NavItem key={link}>
                  <NavLink to={`/${link}`}>{link}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default MyNavbar;

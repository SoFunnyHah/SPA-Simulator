import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavbarText,
  Row,
  Col,
  // Button,
} from 'reactstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { logoutUserAsync } from '../../redux/actions/userActions';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

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
              {/* {user.id && (
              <NavItem key="logout">
                <Button onClick={() => dispatch(logoutUserAsync())}>Logout</Button>
              </NavItem>
              )} */}
            </Nav>
            {/* <NavbarText>{user.name ? `Hello, ${user.name}` : 'Not authed'}</NavbarText> */}
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default MyNavbar;

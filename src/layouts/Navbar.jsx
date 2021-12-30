import { Nav, Navbar, NavItem, Collapse, NavbarToggler } from "reactstrap";

import { useState } from "react";

import { Link } from "react-router-dom";

const AppBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Navbar color="blue" expand="md" dark>
        <Link className="navbar-brand" to="/">
          My React App
        </Link>
        <NavbarToggler onClick={() => setOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppBar;

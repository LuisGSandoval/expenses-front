import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="container">
      <Nav className="d-flex justify-content-center">
        <NavItem>
          <NavLink tag={Link} to="/">
            <GoHome title="home" />
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink tag={Link} to="/">
            Expenses
          </NavLink>
        </NavItem> */}
        {/* <NavItem>
          <NavLink tag={Link}>Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled tag={Link}>
            Disabled Link
          </NavLink>
        </NavItem> */}
      </Nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  const goBack = () => window.history.back();

  return (
    <div className="bg-dark container-fluid">
      <Nav className="d-flex justify-content-between">
        <NavItem>
          {window.location.pathname !== "/" && (
            <NavLink onClick={goBack} className="text-white h3">
              <IoIosArrowBack />
            </NavLink>
          )}
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/" className="text-white h3">
            <GoHome title="home" />
          </NavLink>
        </NavItem>

        <NavItem>
          {window.location.pathname !== "/" && <NavLink> </NavLink>}
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;

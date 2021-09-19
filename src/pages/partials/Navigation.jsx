import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
          Movies24
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/now-playing-films" className="nav-link">
              Latest
            </NavLink>

            <NavLink to="/popular-films" className="nav-link">
              Popular Movies
            </NavLink>

            <NavLink to="/top-rated-films" className="nav-link">
              Top Rated Movies
            </NavLink>

            <NavLink to="/genres" className="nav-link">
              Genres
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

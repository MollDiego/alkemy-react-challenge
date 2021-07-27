import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuthDispatch } from "../../service/Auth";
import "./style.css";

export default function Header() {
  const authDispatch = useAuthDispatch();
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Super Héroes</Navbar.Brand>
        <Nav className="justify-content-end">
          <NavLink exact className="link" activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink className="link" activeClassName="active" to="/searcher">
            Buscador
          </NavLink>
          <Button
            size="sm"
            variant="warning"
            type="button"
            onClick={() => authDispatch({ type: "LOGOUT" })}
          >
            Cerrar sesión
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

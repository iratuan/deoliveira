import React from "react"
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import './styles.css';

export default function Header() {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">deOliveira</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link href="/">Início</Nav.Link>
                            <NavDropdown title="Nossos instrumentos" id="collasible-nav-dropdown" style={{ background: "#000" }}>
                                <NavDropdown.Item href="/instrumentos" style={{ background: "#000" }}>Rainbown KF</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Produtos exclusivos" id="collasible-nav-dropdown" style={{ background: "#000" }}>
                                <NavDropdown.Item href="/instrumentos" style={{ background: "#000" }}>Rainbown KF</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">Parceirias</Nav.Link>
                            <Nav.Link href="/">Ofertas</Nav.Link>
                            <Nav.Link href="/">Seu lugar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
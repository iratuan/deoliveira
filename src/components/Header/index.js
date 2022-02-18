import React from "react"
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import Logo from "../Logo";
import './styles.css';
import { dataMenu } from "./data"

export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            {dataMenu.map(item => {
                                if (item.links == null) {
                                    return <Nav.Link key={item.id} href={item.link} target={item.target}>{item.label}</Nav.Link>
                                } else {
                                    return (
                                        <NavDropdown key={item.id} title={item.label} id="collasible-nav-dropdown">
                                            {item.links.map(subitem => <NavDropdown.Item key={subitem.id} href={subitem.link} target={subitem.target}>{subitem.label}</NavDropdown.Item>)}
                                        </NavDropdown>
                                    )
                                }
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
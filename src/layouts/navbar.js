import {Navbar, Nav, Container} from "react-bootstrap"
import {Link} from "react-router-dom"

const NavBarExample = () => {
    return(
      <>
        <Navbar  className="navBg" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" >STAR WARS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/about">Personajes</Nav.Link>
            <Nav.Link as={Link} to="/contact">Planetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    )
}
export default NavBarExample
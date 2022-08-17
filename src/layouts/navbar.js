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
            <Nav.Link as={Link} to="/personajes">Personajes</Nav.Link>
            <Nav.Link as={Link} to="/planetas">Planetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    )
}
export default NavBarExample
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import iconbar from '../assets/icon/logo.png'
const NavigationBar = () => {
    return (
        <div>
        <Navbar>
            <Container>
            <Navbar.Brand href="#home">
            <img
              src={iconbar}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo">
              </img>
            </Navbar.Brand>
            <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Vehicle Type</Nav.Link>
            <Nav.Link>History</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <div className="m-1">
            <Button variant="outline-warning">Login</Button>{' '}
            </div>
            <div className="m-1">
            <Button variant="warning">Register</Button>{' '}
            </div>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import W from '../assets/img/wwe-icon-512x467-3c29l5ne.png';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            <img src={W} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <div className="nav-link">
                <NavLink to={''}>Home</NavLink>
                <NavLink to={'contact'}>Contact</NavLink>
                <NavLink to={'http://mohasbi.byethost31.com/?i=2'}>About Me</NavLink>
                <NavLink to={'https://docs.google.com/document/d/1ZTVsrF3gQxXpKhElB4zcmrXV9WLgTEpc/edit?usp=sharing&ouid=100969293593956816914&rtpof=true&sd=true'}>Docs</NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

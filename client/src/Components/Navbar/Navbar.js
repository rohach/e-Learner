import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

function NavScrollExample() {
  const token = localStorage.getItem("token");
  const finalToken = JSON.parse(token);

  const userData = localStorage.getItem("userData");
  const finalUserData = JSON.parse(userData);

  const logout = () => {
    localStorage.clear();
  };
  if (token) {
    return (
      <Container>
        <Navbar expand="lg" fixed="top" bg="light">
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand href="" style={{ margin: "0 3em" }}>
                e-Learner
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto ml-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <LinkContainer to="/">
                  <Nav.Link>Courses</Nav.Link>
                </LinkContainer>
                <LinkContainer to="notice">
                  <Nav.Link>Notices</Nav.Link>
                </LinkContainer>
                <LinkContainer to="blog">
                  <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
                <LinkContainer to="request">
                  <Nav.Link>Requests</Nav.Link>
                </LinkContainer>
                <LinkContainer to="support">
                  <Nav.Link>Support</Nav.Link>
                </LinkContainer>
              </Nav>
              <NavDropdown
                title={finalUserData.name}
                id="navbarScrollingDropdown"
                style={{ margin: "0 3em" }}
              >
                <LinkContainer to="profile">
                  <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#action4"></NavDropdown.Item>
                <NavDropdown.Divider />
                <LinkContainer to="login" onClick={logout}>
                  <NavDropdown.Item>LogOut</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  } else {
    return (
      <Container>
        <Navbar expand="lg" fixed="top" bg="light">
          <Container fluid>
            <Navbar.Brand href="/">e-Learner</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto ml-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <LinkContainer to="/">
                  <Nav.Link>Courses</Nav.Link>
                </LinkContainer>
                <LinkContainer to="blog">
                  <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
                <LinkContainer to="support">
                  <Nav.Link>Support</Nav.Link>
                </LinkContainer>
              </Nav>
              <LinkContainer to="login">
                <Nav.Link className="button">Login</Nav.Link>
              </LinkContainer>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default NavScrollExample;

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Container } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  const loginData = () => {
    const inputs = {
      email,
      password,
    };
    axios
      .post(`http://localhost:8000/api/v1/login`, inputs)
      .then((result) => {
        const token = result.data.token;
        const userData = result.data.user;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userData", JSON.stringify(userData));
        toast.success("Logged in successfully!");
        window.setTimeout(function () {
          window.location.replace("/");
        }, 2200);
      })
      .catch((error) => {
        const err = error.response.data.message;
        toast.error(err);
      });
  };
  return (
    <>
      {/* <Container>
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
                <LinkContainer to="/blog">
                  <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/support">
                  <Nav.Link>Support</Nav.Link>
                </LinkContainer>
              </Nav>
              <NavDropdown
                title="Login"
                id="navbarScrollingDropdown"
                style={{ margin: "0 3em" }}
              >
                <LinkContainer to="/register">
                  <NavDropdown.Item href="#action3">Register</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#action4"></NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container> */}
      <section className="vh-100" style={{ backgroundColor: "gainsboro" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card"
                style={{ borderRadius: "1rem", height: "34.5em" }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem", height: "86.5%" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body  h-auto p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={loginData}
                          >
                            Login
                          </button>
                        </div>

                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link to="/register" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Login;

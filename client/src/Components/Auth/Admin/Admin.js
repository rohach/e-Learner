import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Admin.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import admin from "../../Images/admin.jpg";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  //   Admin Login
  const loginData = (e) => {
    e.preventDefault();
    const inputs = {
      email,
      password,
    };
    axios
      .post(`http://localhost:8000/admin/adminlogin`, inputs)
      .then((result) => {
        console.log(result);
        const adminToken = result.data.token;
        const adminData = result.data.admin;
        localStorage.setItem("admintoken", JSON.stringify(adminToken));
        localStorage.setItem("adminData", JSON.stringify(adminData));
        toast.success("Admin logged in successfully!");
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
    <div>
      <Container className="mt-2">
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
                <LinkContainer to="/login">
                  <NavDropdown.Item href="">Login as User</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/adminlogin">
                  <NavDropdown.Item href="">Login as Admin</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="admin__inner">
          <section className="text-center text-lg-start">
            <div className="container py-4">
              <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card cascading-right admin__form">
                    <div className=" border-0 h-auto p-5">
                      <h2 className="fw-bold mb-5">Hello Admin.</h2>
                      <form>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                          onClick={loginData}
                        >
                          Sign up
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                  <img
                    src={admin}
                    className="w-100 rounded-4 shadow-4 admin__image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
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
    </div>
  );
};

export default Admin;

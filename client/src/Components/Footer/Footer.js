import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
  return (
    <Container className="footer mt-lg-5">
      <MDBFooter className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/rohan.chaulagain.5"
              target="_blank"
              className="me-4 text-reset"
            >
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a
              href="https://www.instagram.com/rohanchaulagain/"
              target="_blank"
              className="me-4 text-reset"
            >
              <MDBIcon fab icon="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-chaulagain-ab0976211/"
              target="_blank"
              className="me-4 text-reset"
            >
              <MDBIcon fab icon="linkedin" />
            </a>
            <a
              href="https://github.com/rohanc01"
              target="_blank"
              className="me-4 text-reset"
            >
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  e-Learner
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Putalisadak, KTM
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  rohanchaulagain1@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> +977-9868828760
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <hr />
        <div className="text-center p-4">
          © 2022 Copyright:
          <a
            className="text-reset fw-bold"
            href="/"
            style={{ textDecoration: "none" }}
          >
            &nbsp; e-Learner
          </a>
        </div>
      </MDBFooter>
    </Container>
  );
};

export default Footer;

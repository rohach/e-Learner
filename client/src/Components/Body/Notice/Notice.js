import React, { useEffect, useState } from "react";
import "./Notice.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Container } from "react-bootstrap";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/notice/all`)
      .then((result) => {
        setNotices(result.data.notice);
        console.log(result.data.notice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <div className="notices">
        <div className="notices__inner">
          <h1>News & Announcements</h1>

          <div className="row notice__card ">
            {notices.map((result) => {
              return (
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-5">
                  <div className="bg-light card pro-card">
                    <img
                      className="card-img"
                      src={"http://localhost:8000/" + result.image}
                      alt="Image"
                    />
                    <div className="card-body">
                      <div className="row">
                        <p className="col-md-12  notice__title">
                          {result.name}
                          <div style={{ float: "right" }}>
                            {result.createdAt}
                          </div>
                        </p>
                      </div>
                      <div className="message">{result.message}</div>
                    </div>
                    <div className="button__notice">Read More</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Notice;

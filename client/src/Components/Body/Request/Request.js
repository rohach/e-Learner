import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "./Request.css";
import Lottie from "lottie-web";
import { useRef } from "react";
import axios from "axios";

const Request = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [myreq, setMyreq] = useState("");
  const animation = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Animation/online.json"),
    });
  }, []);

  //   Send data to backend
  const sendData = (e) => {
    e.preventDefault();
    const requestData = {
      name,
      email,
      address,
      phone,
      myreq,
    };

    axios
      .post(`http://localhost:8000/api/v1/request/createrequest`, requestData)
      .then(() => {
        // window.alert("sdfjkb");
      });
  };
  return (
    <Container className="request">
      <div className="request__left">
        <div className="animation" ref={animation}></div>
      </div>
      <div className="request__right">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName4">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName4"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPhone">Phone</label>
            <input
              type="number"
              className="form-control"
              id="inputPhone"
              placeholder="XXXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={myreq}
              placeholder="Your Query here..."
              onChange={(e) => setMyreq(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={sendData}>
            Send Request
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Request;

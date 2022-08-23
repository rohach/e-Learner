import React, { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  //   Send data
  const sendData = (e) => {
    e.preventDefault();
    const regData = {
      name,
      email,
      password,
      address,
      phone,
      image,
    };
    axios
      .post(`http://localhost:8000/api/v1/register`, regData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((result) => {
        toast.success("Registration Success!");
        window.setTimeout(function () {
          window.location.replace("/login");
        }, 2000);
      })
      .catch((error) => {
        const err = error.response.data.message;
        toast.error(err);
      });
  };
  return (
    <div>
      <body>
        <div class="modernForm">
          <div class="imageSection">
            <div class="image">
              <div class="overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="pexels-yuri-manei-2272854"
              />
            </div>
            <div class="textInside">
              <h1>Be a part amongst us.</h1>
              <p class="tagLine"></p>
            </div>
          </div>
          <div class="contactForm">
            <h1>Registaration Form</h1>
            <form>
              <div class="name">
                <label for="fullName">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="ex: Lindsey Wilson"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div class="iconName">
                  <i class="fa-solid fa-user"></i>
                </div>
              </div>
              <div class="name">
                <label for="email">Your Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div class="iconName">
                  <i class="fa-solid fa-envelope"></i>
                </div>
              </div>
              <div class="name">
                <label for="Password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div class="iconName">
                  <i class="fa-solid fa-lock"></i>
                </div>
              </div>
              <div class="name">
                <label for="address">Address:</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div class="iconName">
                  <i class="fa-solid fa-user"></i>
                </div>
              </div>
              <div class="name">
                <label for="phone">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div class="iconName">
                  <i class="fa-solid fa-user"></i>
                </div>
              </div>
              <div class="name">
                <input
                  type="file"
                  name="image"
                  id="image"
                  required
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <input type="submit" value="Register" onClick={sendData} />
            </form>
          </div>
        </div>
      </body>
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

export default Registration;

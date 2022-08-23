import React from "react";
import "./Profile.css";

const Profile = () => {
  const userData = localStorage.getItem("userData");
  const finalUserData = JSON.parse(userData);
  console.log(finalUserData);
  return (
    <div>
      <div className="profile">
        <section className="section about-section gray-bg" id="about">
          <div className="container profile__text__container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="about-text go-to">
                  <h3 className="dark-color">About Me</h3>
                  <h6 className="theme-color lead">
                    Hi, I'm {finalUserData.name}!
                  </h6>
                  <p style={{ textAlign: "justify" }}>{finalUserData.desc}</p>
                  <div className="row about-list">
                    <div className="col-md-8">
                      <div className="media">
                        <label>Email: </label>
                        <p>{finalUserData.email}</p>
                      </div>
                      <div className="media">
                        <label>Residence</label>
                        <p>{finalUserData.address}</p>
                      </div>
                      <div className="media">
                        <label>Phone: </label>
                        <p>{finalUserData.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-avatar">
                  <img
                    src={`http://localhost:8000/${finalUserData.image}`}
                    alt="Profile-Pic"
                    className="profile__image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;

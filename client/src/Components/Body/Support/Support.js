import React, { useState } from "react";
import "./Support.css";
import axios from "axios";

const Support = () => {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState("");
  const [needs, setNeeds] = useState("");

  // Send data to backend
  const sendData = (e) => {
    e.preventDefault();
    const supportData = {
      name,
      query,
      tags,
      needs,
    };
    axios
      .post("http://localhost:8000/api/v1/support/create", supportData)
      .then(() => {
        window.alert("skadjfb");
      });
  };

  return (
    <div>
      <div className="container mt-lg-5 pt-lg-5 support">
        <div className="row">
          <div className="col-md-6">
            <h1>
              Let's get you
              <br /> some help!
            </h1>
            <h6>
              Have any issue? Send us an{" "}
              <span className="email-us">email.</span>
            </h6>
            <div className="support__img">
              <img
                src="https://i.ibb.co/bWfN3Qy/undraw-onboarding-o8mv-1.png"
                alt="undraw-onboarding-o8mv-1"
                border="0"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-md-6 mt-5 support__form">
            <form>
              <div className="form-group">
                <label htmlFor="list">Your contact information ?</label>
                <input
                  type="text"
                  className="form-control"
                  id="list"
                  aria-describedby="emailHelp"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="list">What list are you looking for ?</label>
                <input
                  type="text"
                  className="form-control"
                  id="list"
                  aria-describedby="emailHelp"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tags">Please Few Primary Tags ?</label>
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="describe">
                  Please desribe your list needs ?
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="describe"
                  rows="5"
                  value={needs}
                  onChange={(e) => setNeeds(e.target.value)}
                ></textarea>
              </div>
            </form>

            <button
              type="button"
              className="btn btn-primary"
              onClick={sendData}
            >
              <span>Submit</span>{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

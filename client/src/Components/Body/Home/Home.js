import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "./Home.css";
import study from "../../Images/s.jpg";
import axios from "axios";
const image = require("../../Images/ai.jpg");

const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [courses, setCourses] = useState([]);
  const [recent, setRecent] = useState([]);

  // token
  const token = localStorage.getItem("token");

  // New arrivals
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/newarrival/all`).then((result) => {
      setNewArrivals(result.data.newArrival);
    });
  }, []);

  // Courses
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/course/all`).then((result) => {
      setCourses(result.data.courses);
    });
  }, []);

  // Recent arrivals
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/recent/all`).then((result) => {
      setRecent(result.data.recent);
    });
  }, []);
  return (
    <Container>
      <div style={{ paddingTop: "3em" }}>
        <div className="blog_container">
          <div className="blog_content">
            <div className="left_content">
              <div className="blog_card">
                <a href="article.html" className="figure">
                  <img
                    src={study}
                    alt=""
                    loading="lazy"
                    className="home__image"
                  />
                </a>
                <section>
                  <a href="#" className="title">
                    Welcome to e-Learner...
                  </a>
                  <p>
                    Whether you want to learn or to share what you know, you’ve
                    come to the right place. As a global destination for online
                    learning, we connect people through knowledge.{" "}
                    <a href="">
                      <b>Learn More?</b>
                    </a>
                  </p>
                </section>
              </div>

              {courses.map((course) => {
                return (
                  <div className="blog_card">
                    <a href="#" className="figure">
                      <img
                        src={`http://localhost:8000/${course.image}`}
                        alt="img"
                        loading="lazy"
                      />
                      <span className="tag">{course.enrolled}</span>
                    </a>
                    <section>
                      <small>Lecturer: {course.name}</small>
                      <br />
                      <a href="#" className="title">
                        {course.title}
                      </a>
                      <p>{course.small_desc}</p>
                    </section>
                  </div>
                );
              })}
            </div>
            <button className="btn1 load-btn">Load more</button>
          </div>

          <div className="blog_content right_content">
            <div className="columns books">
              <span className="title">
                New Books{" "}
                <a href="#" title="Explore More">
                  <i className="fa fa-share"></i>
                </a>
              </span>
              <section>
                <div className="cards">
                  <div
                    className="card_part card_part-one"
                    style={{
                      backgroundImage:
                        "url(https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg)",
                      height: "100%",
                      width: "100%",
                    }}
                  ></div>
                  <div
                    className="card_part card_part-two"
                    style={{
                      backgroundImage:
                        "url(https://i.postimg.cc/2SD5y5RS/book-1.png)",
                    }}
                  ></div>
                  <div
                    className="card_part card_part-three"
                    style={{
                      backgroundImage:
                        "url(https://i.postimg.cc/2SD5y5RS/book-1.png)",
                    }}
                  ></div>
                  <div
                    className="card_part card_part-four"
                    style={{
                      backgroundImage:
                        "url(https://i.postimg.cc/2SD5y5RS/book-1.png)",
                    }}
                  ></div>
                </div>
              </section>
            </div>

            <div className="columns posts">
              <span className="title">
                Recent Arrival{" "}
                <a href="#" title="Explore More">
                  <i className="fa fa-share"></i>
                </a>
              </span>
              <section>
                <a href="#">
                  <div className="row">
                    {recent.map((r) => {
                      return (
                        <>
                          <div className="col-md-4 mb-2 recent__image">
                            <img
                              src={`http://localhost:8000/${r.image}`}
                              alt="image"
                              loading="lazy"
                            />{" "}
                          </div>
                          <p className="col-md-8 mb-2 recent__title">
                            {r.title}{" "}
                          </p>
                        </>
                      );
                    })}
                  </div>
                </a>
              </section>
            </div>

            <div className="columns categories">
              <span className="title">Categories</span>
              <section>
                <a href="#">Bhagavad Gita</a>
                <a href="#">Education</a>
                <a href="#">Importance of reading</a>
                <a href="#">Origin of vedas</a>
                <a href="#">Srimad bhagavatam</a>
                <a href="#">Krishna</a>
                <a href="#">Process of aquiring knowledge</a>
              </section>
            </div>

            <div className="columns comments">
              <span className="title">
                {" "}
                Recent Feedbacks{" "}
                <a href="#" title="Explore More">
                  <i className="fa fa-share"></i>
                </a>
              </span>
              <section>
                <marquee
                  direction="up"
                  scrollamount="4"
                  onMouseOver="this.stop()"
                  onMouseOut="this.start()"
                  className="marquee2"
                >
                  <p>
                    Remember, torn clothes should not be left at home. Dispose
                    of them out. Buying new clothes like towels.
                  </p>
                  <p>
                    wearing clothes, bedsheets are like inviting good luck to
                    the home.
                  </p>
                  <p>
                    Arrange doormats before every door and please change the
                    doormats once in 6/8 months or maximum within 1 year. For
                    More Daily
                  </p>
                </marquee>
              </section>
            </div>

            <div className="columns social_icons">
              <a href="#" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" title="Instagram">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" title="Youtube">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="#" title="Whatsapp">
                <i className="fa fa-whatsapp"></i>
              </a>
              <a href="#" title="Telegram">
                <i className="fa fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;

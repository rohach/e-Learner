import React, { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/blog/all`).then((result) => {
      setBlog(result.data.blog);
    });
  });

  return (
    <>
      <section className="main">
        <div className="container cards-container">
          <h1>Latest News from Blog</h1>
          <img
            className="deco"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fdivider-png-hd-divider-png-1589-304-1589.png&f=1&nofb=1"
          />

          <div className="flex-container">
            <div className="row" style={{ gap: "2rem" }}>
              {blog.map((b) => {
                return (
                  <div href="#" className="card-box p-3">
                    <img
                      src={`http://localhost:8000/${b.image}`}
                      className="card-img"
                    />
                    <div className="card-text">
                      <div className="card-data">
                        <p className="data-text">{b.createdAt}</p>
                        <p className="data-text" style={{ float: "right" }}>
                          Posted by &nbsp;
                          <a href="#" className="autor">
                            {b.name}
                          </a>
                        </p>
                      </div>

                      <a href="#" className="card-title">
                        {b.heading}
                      </a>
                      <p className="card-description">{b.blog}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

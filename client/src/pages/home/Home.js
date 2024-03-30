import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="headerr">
        <div className="container about">
          <div className="about-content">
            <div className="about-img flex">
              <img src="images/img/profile.jpg" alt="photographer img" />
            </div>
            <h2>I'm Deepak Bhawsar</h2>
            <h3>Photographer</h3>
            <blockquote className="lorem">
              "Photography is a way of feeling, of touching, of loving. What you
              have caught on film is captured forever ... It remembers little
              things, long after you have forgotten everything."
              <span>-Aaron Siskind</span>
            </blockquote>
          </div>
          <div className="social-icons">
            <ul>
              <li>
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://youtube.com">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="slider">
        <div className="image-box">
          <div className="image">
            <img
              className="img1"
              src="/images/img/IMG-20230731-WA0044.jpg"
              alt="/"
            />
          </div>
          <div className="image">
            <img
              className="img2"
              src="images/img/IMG-20230801-WA0002.jpg"
              alt="/"
            />
          </div>
          <div className="image">
            <img
              className="img3"
              src="images/img/IMG-20230731-WA0040.jpg"
              alt="/"
            />
          </div>
          <div className="image">
            <img
              className="img4"
              src="images/img/IMG-20230731-WA0085.jpg"
              alt="/"
            />
          </div>
          <div className="image">
            <img
              className="img5"
              src="images/img/IMG-20230731-WA0067.jpg"
              alt="/"
            />
          </div>
        </div>
      </section>

      <section className="section-one">
        <div className="container">
          <div className="sec-one-left">
            <div>
              <a href="/gallery" className="butn">
                view all
              </a>
            </div>
          </div>

          <div className="sec-one-right">
            <div className="work-content">
              <h3>AMAZING TEAM WORK WITH PROFESSIONAL PHOTOGRAPHERS</h3>
              <p>
                We Started our journey in 2013 that's name is PhotoPuickStudio.
                We captured millions of memories of millions of people in last
                10 years. We captured the moments of every Event of your life
                like as Wedding, party, Birthday, Event, fashion Show,
                Pre-wedding etc. Our Team always gives their Best.
              </p>
              <a href="/contact" className="btn">
                Book Now
              </a>
            </div>
            <div className="work-imgs">
              <div className="work-img-1"></div>
              <div className="work-img-2"></div>
            </div>
            <h3>
              "Taking an image, freezing a moment, reveals how rich reality
              truly is."
            </h3>
          </div>
        </div>
      </section>

      <div className="container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l5EWvcy7R-A?start=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <section className="section-two">
        <div className="container">
          <h2>FOLLOW ON INSTAGRAM</h2>
          <Link
            to={
              "https://instagram.com/photopickstudio12?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            }
          >
            <span>@photopickstudio12</span>
          </Link>
          <div className="insta-imgs">
            <div>
              <img src="images/img/IMG-20230731-WA0027.jpg" alt="/" />
              <div className="icon-overlay flex">
                <Link
                  to={
                    "https://instagram.com/photopickstudio12?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  }
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
            <div>
              <img src="images/img/IMG-20230731-WA0035.jpg" alt="/" />
              <div className="icon-overlay flex">
                <Link
                  to={
                    "https://instagram.com/photopickstudio12?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  }
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
            <div>
              <img src="images/img/IMG-20230731-WA0038.jpg" alt="/" />
              <div className="icon-overlay flex">
                <Link
                  to={
                    "https://instagram.com/photopickstudio12?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  }
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
            <div>
              <img src="images/img/IMG-20230731-WA0045.jpg" alt="/" />
              <div className="icon-overlay flex">
                <Link
                  to={
                    "https://instagram.com/photopickstudio12?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  }
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

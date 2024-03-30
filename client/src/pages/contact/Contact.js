import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import Alert from "./Alert";
import { useState } from "react";
import Alert from "../Alert";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2727g1i",
        "template_mtn0uq5",
        form.current,
        "2ZpyeATsWr8-6w3tk"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("messege sent");
          showAlert("Message Sent Successfully!", "success");
          handleClick();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const handleClick = () => {
    form.current.reset();
  };

  return (
    <>
      <section className="section-five">
        <div className="container">
          <div className="contact-top">
            <h3>CONTACT ME</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, nobis.
            </p>
          </div>

          <div className="contact-middle">
            <div>
              <span className="contact-icon">
                <i className="fas fa-map-signs"></i>
              </span>
              <span>Address</span>
              <p>Vijay Nagar, Indore</p>
            </div>

            <div>
              <span className="contact-icon">
                <i className="fas fa-phone"></i>
              </span>
              <span>Contact Number</span>
              <p>88XXXXXX09</p>
              <p>84XXXXXX22</p>
            </div>

            <div>
              <span className="contact-icon">
                <i className="fas fa-paper-plane"></i>
              </span>
              <span>Email Address</span>
              <p>photopickstudio@gmail.com</p>
            </div>

            <div>
              <span className="contact-icon">
                <i className="fas fa-globe"></i>
              </span>
              <span>Website</span>
              <p>www.photopickstudio.com</p>
            </div>
          </div>

          <div className="contact-bottom" />
          <form ref={form} onSubmit={sendEmail} className="form">
            <select className="select-box" name="user_event" required>
              <option hidden>Event Type</option>
              <option>Wedding Shoot</option>
              <option>Pre-wedding Shoot</option>
              <option>Fashion Shoot</option>
              <option>Others</option>
            </select>
            <select className="select-box" name="user_side" required>
              <option hidden>Which Side</option>
              <option>Bride</option>
              <option>Groom</option>
              <option>Others</option>
            </select>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input
              type="number"
              name="user_contact"
              placeholder="Your contact No."
              required
            />
            <input
              type="text"
              name="user_location"
              placeholder="Event location"
              required
            />
            <input
              type="date"
              name="user_date"
              placeholder="Event start date"
              required
            />
            <input
              type="day"
              name="user_days"
              placeholder="Event days"
              required
            />
            <textarea name="message" rows="9" placeholder="Message"></textarea>
            <input type="submit" value="Send" className="butn" />
          </form>
        </div>
      </section>

      <Alert alert={alert} />
    </>
  );
};

export default Contact;

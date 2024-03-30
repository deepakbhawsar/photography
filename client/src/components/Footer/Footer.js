import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div>
          <h2>Deepak Bhawsar</h2>
          <p>
            An Amazing Photographer & founder of PhotoPickStudio. Mr. Solanki
            converts his hobby of Photography to his profession. The Dream of
            photography comes in true in 2013 Which name is PhotoPickStudio.
          </p>
        </div>
        <div>
          <h2>About Us!</h2>
          <p>
            We Started our journey in 2013 that's name is PhotoPuickStudio. We
            captured millions of memories of millions of people in last 10
            years. We captured the moments of every Event of your life like as
            Wedding, party, Birthday, Event, fashion Show, Pre-wedding etc. Our
            Team always gives their Best.
          </p>
        </div>
      </div>

      <Link style={{ color: "white" }} className="text" to={`/dashboard/admin`}>
        <p> Admin</p>
      </Link>

      <p>&copy; Copyright deepakbhawsar .</p>
      <p> All Rights are Reserved.</p>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Leave ME Your Info</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Full Name ( Required)</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email ( Required)</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-block">
          <div className="info-icon">&#x1F4CD;</div>
          <div className="info-text">
            <p>Country: Bangladesh</p>
            <p>City: Dhaka</p>
            <p>Street: 35 Vhatara, Badda</p>
          </div>
        </div>
        <div className="info-block">
          <div className="info-icon">&#x2709;</div>
          <div className="info-text">
            <p>Email: Youremail@Gmail.Com</p>
            <p>Skype: @Yourusername</p>
            <p>Telegram: @Yourusername</p>
          </div>
        </div>
        <div className="info-block">
          <div className="info-icon">&#x1F4DE;</div>
          <div className="info-text">
            <p>Support Services: 15369</p>
            <p>Office: +58 (021)356 587 235</p>
            <p>Personal: +58 (021)356 587 235</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

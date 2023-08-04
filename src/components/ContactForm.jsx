import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="form" id="contact_us__form">
      <div className="top">Get in Touch With Us</div>
      <div className="formGroup">
        <label className="label">Email*</label>
        <input type="email" className="input" name="email" required />
      </div>
      <div className="formGroup">
        <label className="label">Full Name*</label>

        <input type="text" className="input" name="fullName" required />
      </div>
      <div className="formGroup">
        <label className="label">Subject</label>

        <input type="text" className="input" name="subject" required />
      </div>
      <div className="formGroup">
        <label className="label">How can we help you?</label>

        <textarea className="textarea" name="message" required max />
      </div>
      <div className="formGroup">
        <label className="label">Budget for this project:</label>

        <input type="text" className="input" name="budget" required />
      </div>
      <div>
        <button type="submit" className="button">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

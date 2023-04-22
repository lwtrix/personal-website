import React, { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdAlternateEmail, MdLocationPin } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

import "./contact.css";

const Contact = ({}, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qz5b6eq",
        "template_u2ahhrs",
        form.current,
        "CPhTzzl2NZx-KRmjA"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" ref={ref}>
      <h2 className="section-heading">CONTACT ME</h2>
      <div className="body">
        <div className="socials">
          <div className="container">
            <MdAlternateEmail className="icon" />
            <span className="text">davidnitu44@gmail.com</span>
          </div>
          <div className="container">
            <MdLocationPin className="icon" />
            <span className="text">Birmingham, United Kingdom</span>
          </div>
          <div className="container">
            <IoIosPhonePortrait className="icon" />
            <span className="text">+44 7456261242</span>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="form-control">
            <label>Name</label>
            <input type="text" name="user_name" className="input" required />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input type="email" name="user_email" className="input" required />
          </div>
          <div className="form-control">
            <label>Message</label>
            <textarea name="message" className="input textarea" required/>
          </div>
          <input type="submit" value="Send" className="send-btn"/>
        </form>
      </div>
    </div>
  );
};

export default forwardRef(Contact);

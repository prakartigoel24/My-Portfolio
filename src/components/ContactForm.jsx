import React, { useState } from "react";
import "../styles/contactForm.scss";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, ".contact_form", {
        publicKey: emailjsPublicKey,
      })
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section section_support section_contact">
      <h2>Contact Me</h2>
      <div className="container">
        <form onSubmit={handleSubmit} className="contact_form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            autoComplete="off"
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete="off"
            placeholder="Enter your email"
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            autoComplete="off"
            placeholder="Write the subject"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={8}
            cols={10}
            required
            autoComplete="off"
            placeholder="Write your message"
          />

          <button type="submit" className="btn_accent">
            Send Message
          </button>
        </form>
        <div className="contact_illustration">
          <img
            src="/images/computer-illustration.png"
            alt="Illustration of computer, email."
          />
        </div>
      </div>
    </section>
  );
};
export default ContactForm;

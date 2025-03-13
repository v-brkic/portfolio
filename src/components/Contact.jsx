// Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Otvori mailto link sa popunjenim podacima
    window.location.href = `mailto:your-email@example.com?subject=Kontakt forma&body=Ime: ${formData.name}%0DEmail: ${formData.email}%0DPoruka: ${formData.message}`;
    setSubmitted(true);
  };

  return (
    <section className="contact-section fade-in">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">I would love to hear from you!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
        {submitted && <p className="success-message">Message sent!</p>}
      </form>
    </section>
  );
};

export default Contact;

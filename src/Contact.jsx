import React, { useState } from "react";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+()\-\s]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Your message should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    try {
      setIsSubmitting(true);

      // Replace this timeout with real API/email service later
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setFormData(initialForm);
      setErrors({});
    } catch {
      setIsSubmitted(false);
      setErrors({
        form: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="contact-label">Contact</p>
        <h2 className="contact-title">Schedule a private tour.</h2>
        <p className="contact-subtitle">
          Share your details and our team will be in touch to arrange a private
          presentation of Biscayne Coast.
        </p>
      </div>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-grid">
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
                placeholder="Your name"
              />
              {errors.name && <p className="field-error">{errors.name}</p>}
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
                placeholder="you@example.com"
              />
              {errors.email && <p className="field-error">{errors.email}</p>}
            </div>

            <div className="contact-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "input-error" : ""}
                placeholder="(555) 555-5555"
              />
              {errors.phone && <p className="field-error">{errors.phone}</p>}
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "input-error" : ""}
                placeholder="Tell us a bit about what you're looking for."
              />
              {errors.message && (
                <p className="field-error">{errors.message}</p>
              )}
            </div>
          </div>

          {errors.form && <p className="form-error">{errors.form}</p>}

          <div className="contact-actions">
            <button type="submit" className="contact-button" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>

            {isSubmitted && (
              <p className="form-success">
                Thank you — your message has been submitted.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
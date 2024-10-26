import { useScroll } from "@react-three/drei";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_ftgttol",
        "template_3qgibok",
        {
          from_name: form.name,
          to_name: "Nischay",
          from_email: form.email,
          to_email: "nischay.singh2709@gmail.com",
          message: form.message,
        },
        "x5U6BkHUxLYhLu1Rc"
      );
      setLoading(false);

      alert("Your message has been sent!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether it is to discuss Software Engineering, Soccer, or Formula 1,
            I am only a click away. Don't hesitate to reach out!
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Done"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I am reaching out to you...."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

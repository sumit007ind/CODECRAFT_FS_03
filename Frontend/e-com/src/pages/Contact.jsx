import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        () => alert("Message sent!"),
        (error) => alert("Error: " + error.text)
      );
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-6">
      <form ref={form} onSubmit={sendEmail} className="bg-zinc-800 p-8 rounded-md shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">Contact Us</h2>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded bg-zinc-700"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded bg-zinc-700"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 mb-4 rounded bg-zinc-700 h-32 resize-none"
          required
        />

        <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded font-semibold">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

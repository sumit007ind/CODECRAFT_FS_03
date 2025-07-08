import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      emailjs.sendForm(
 "service_ylbdoyn",
  
"__ejs-test-mail-service__",
  form.current,
 "vrqdwWLMNPhYZfESDI" 
)

      .then(
        (result) => {
          alert("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong 😓: " + error.text);
        }
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

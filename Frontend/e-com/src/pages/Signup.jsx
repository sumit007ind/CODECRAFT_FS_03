import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
   
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <form onSubmit={handleSignup} className="bg-zinc-800 p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">Create Your Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded bg-zinc-700 text-white"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-zinc-700 text-white"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-zinc-700 text-white"
          onChange={handleChange}
          required
        />

        <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded font-semibold">
          Sign Up
        </button>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

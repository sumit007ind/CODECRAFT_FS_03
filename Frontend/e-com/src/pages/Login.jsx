import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // TODO: Connect with backend
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <form onSubmit={handleLogin} className="bg-zinc-800 p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">Login to LocalMart</h2>

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
          Login
        </button>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-bold text-purple-400">
          GullyMart 🛒
        </Link>

      
        <div className="hidden md:flex items-center  gap-6">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/cart" className="hover:text-purple-400">Cart</Link>
          <Link to="/checkout" className="hover:text-purple-400">Checkout</Link>
          <Link to="/contact" className="hover:text-purple-400">Contact</Link>
        </div>

       
        <button
          className="md:hidden text-purple-400 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

  
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 transition-all duration-300 ease-in-out">
          <Link to="/" className="hover:text-purple-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/cart" className="hover:text-purple-400" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link to="/checkout" className="hover:text-purple-400" onClick={() => setIsOpen(false)}>Checkout</Link>
          <Link to="/contact" className="hover:text-purple-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

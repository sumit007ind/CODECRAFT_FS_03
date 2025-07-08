import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400 text-sm text-center py-6 mt-12 border-t border-zinc-800">
      <p>© {new Date().getFullYear()} LocalMart. Built with 💜 in Your City.</p>
      <p>All rights reserved.</p>
    </footer>
  );
};

export default Footer;

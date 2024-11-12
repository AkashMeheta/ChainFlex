import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-6 space-y-4 mt-10">
      <nav className="flex space-x-6">
        <a href="#" className="hover:text-gray-800">About</a>
        <a href="#" className="hover:text-gray-800">Blog</a>
        <a href="#" className="hover:text-gray-800">Partners</a>
      </nav>
      <div className="flex space-x-4 text-2xl">
        <a href="#" className="hover:text-gray-800"><FaFacebook /></a>
        <a href="#" className="hover:text-gray-800"><FaInstagram /></a>
        <a href="#" className="hover:text-gray-800"><FaGithub /></a>
      </div>
      <p className="text-sm text-gray-500">
        Decentralised Finance Application © 2024 Final Year Project
      </p>
    </footer>
  );
};

export default Footer;

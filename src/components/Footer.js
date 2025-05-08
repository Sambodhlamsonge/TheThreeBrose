import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-coffeeBrown text-cream py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-sm">
            We are passionate about serving the richest Dishes and delicious treats in the city.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Information</h3>
          <p className="text-sm"></p>
          <p className="text-sm">Phone: 9922612132</p>
          <p className="text-sm">Email: info@coffeeshop.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-lightBrown transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-lightBrown transition">About</Link></li>
            <li><Link to="/shop" className="hover:text-lightBrown transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-lightBrown transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-lightBrown transition">Login</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-lightBrown transition"><FaInstagram /></a>
            
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
            &copy; {new Date().getFullYear()} TheThreeBRose. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

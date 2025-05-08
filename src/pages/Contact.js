import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 py-12 bg-cream text-coffeeBrown">
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <p>
          For inquiries, please email us at info@thethreebrose.com or call 9922612132.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

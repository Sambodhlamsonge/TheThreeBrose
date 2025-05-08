import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 py-12 bg-cream text-coffeeBrown">
        <h1 className="text-4xl font-semibold mb-6">About Us</h1>

        <section className="mb-6">
          <p className="mb-4 text-lg">
            🌹 Welcome to TheThreeBRose 🌹<br />
            Where every meal feels like home and every cup tells a story.
          </p>
          <p className="mb-4">
            At TheThreeBRose, we are passionate about delivering the warmth of homemade food and the richness of freshly brewed coffee—straight to your doorstep. Our mission is simple: to blend quality, flavor, and comfort into every bite and sip you experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">☕ Why Choose TheThreeBRose?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Authentic Homemade Recipes – Made with love, just like mom used to make.</li>
            <li>✅ Freshly Brewed Coffee – Sourced from premium beans and brewed to perfection.</li>
            <li>✅ Doorstep Delivery – Fast, fresh, and fuss-free.</li>
            <li>✅ Curated Comfort Foods – From soul-soothing soups to hearty meals.</li>
            <li>✅ Eco-Friendly Packaging – Good for you and the planet.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">🍴 Our Menu Highlights:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Signature Style Coffee</li>
            <li>Classic Burgers</li>
            <li>Creamy Pasta</li>
            <li>Homemade Desserts</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">👨‍🍳 Handcrafted with Care:</h2>
          <p>
            Each dish is made from scratch, using high-quality ingredients and a dash of love. Whether you're starting your day with a warm croissant and espresso, or winding down with a cozy dinner bowl, TheThreeBRose brings comfort food to a whole new level.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">📍 Serving:</h2>
          <p>Currently delivering in <strong>Hirkani colony, Pune</strong>, 7 days a week.</p>
          <p>🕒 Timings: 10 AM - 2 AM (Night orders only)</p>
          <p>📦 Order via: Our website / Instagram</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;

import React, { useState } from 'react';

function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Placeholder for subscription logic
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-coffeeBrown py-12 px-6 flex flex-col items-center text-cream">
      <h2 className="text-3xl font-semibold mb-4">Join us and get 15% off</h2>
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          className="flex-grow px-4 py-3 rounded-full text-coffeeBrown focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-cream text-coffeeBrown px-6 py-3 rounded-full font-semibold hover:bg-lightBrown transition"
        >
          Subscribe
        </button>
      </form>
      {subscribed && <p className="mt-4 text-green-300">Thank you for subscribing!</p>}
    </section>
  );
}

export default SubscribeSection;

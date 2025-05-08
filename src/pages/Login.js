import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 py-12 bg-cream text-coffeeBrown flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-cream p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>
          <label className="block mb-2 font-semibold" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="w-full mb-4 px-4 py-2 border border-coffeeBrown rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label className="block mb-2 font-semibold" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="w-full mb-6 px-4 py-2 border border-coffeeBrown rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-coffeeBrown text-cream py-3 rounded hover:bg-lightBrown transition"
          >
            Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Login;

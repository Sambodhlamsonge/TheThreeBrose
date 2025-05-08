import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

function Shop() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/items');
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load items.');
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex justify-center items-center text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="px-6 py-12 bg-cream flex-grow">
        <h1 className="text-4xl font-semibold mb-8 text-center text-coffeeBrown">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Shop;

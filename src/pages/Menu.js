import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { fetchItems } from '../services/api';
import { ItemsContext } from '../contexts/ItemsContext';

function Menu() {
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { items } = useContext(ItemsContext);

  useEffect(() => {
    const loadItems = async () => {
      const fetchedItems = await fetchItems();
      setAllProducts(fetchedItems);
    };
    loadItems();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Combine fetched items with locally added items
  const combinedItems = [...allProducts, ...items];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="px-6 py-12 bg-cream flex-grow">
        <h1 className="text-4xl font-semibold mb-8 text-center text-coffeeBrown">Our Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {combinedItems.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Menu;

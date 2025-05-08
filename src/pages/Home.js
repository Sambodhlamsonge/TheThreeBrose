import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryIcons from '../components/CategoryIcons';
import SubscribeSection from '../components/SubscribeSection';
import FeaturedSection from '../components/FeaturedSection';
import { ItemsContext } from '../contexts/ItemsContext';
import { OrdersContext } from '../contexts/OrdersContext';
import ItemsDebug from '../components/ItemsDebug';

function Home() {
  const [cart, setCart] = useState([]);
  const [fetchedItems, setFetchedItems] = useState([]);
  const { items } = useContext(ItemsContext);
  const { addOrder } = useContext(OrdersContext);

  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [formError, setFormError] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/items');
        setFetchedItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
        // Fallback: do not set fetchedItems, rely on context items only
      }
    };
    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const combinedItems = [...fetchedItems, ...items];

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePaymentScreenshotChange = (e) => {
    const file = e.target.files[0];
    setPaymentScreenshot(file);
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (!name || !contactNumber || !address || !paymentScreenshot) {
      setFormError('Please fill all fields and upload payment screenshot.');
      return;
    }
    if (cart.length === 0) {
      setFormError('Cart is empty. Please add items to cart.');
      return;
    }
    setFormError('');

    // Convert paymentScreenshot file to base64 string before adding order
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Screenshot = reader.result;
      const order = {
        id: Date.now(),
        name,
        contactNumber,
        address,
        items: cart,
        totalAmount,
        paymentScreenshot: base64Screenshot,
        orderTime: new Date().toISOString(),
      };
      addOrder(order);
      setOrderSuccess(true);
      // Clear form and cart
      setName('');
      setContactNumber('');
      setAddress('');
      setPaymentScreenshot(null);
      setCart([]);

      // Send SMS notification via backend API
      try {
        await axios.post('http://localhost:5000/send-sms', {
          name: order.name,
          contactNumber: order.contactNumber,
          address: order.address,
          items: order.items,
          totalAmount: order.totalAmount,
        });
      } catch (error) {
        console.error('Failed to send SMS notification:', error);
      }
    };
    reader.readAsDataURL(paymentScreenshot);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative bg-coffeeBrown bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-cream px-4"
        style={{ backgroundImage: "url('/assets/hero-coffee.jpg')" }}
        aria-label="Hero section with coffee cup and tagline"
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center drop-shadow-lg">
          We pledged to serve purely homemade dishes to your doorstep
        </h1>
      </section>

      {/* Category Icons Section */}
      <CategoryIcons />

      {/* Items Section */}
      {combinedItems.length > 0 ? (
        <FeaturedSection items={combinedItems} addToCart={addToCart} />
      ) : (
        <p className="text-center text-coffeeBrown mt-8">No items available.</p>
      )}

      {/* Cart and Order Form Section */}
      <section className="px-6 py-8 bg-cream rounded-lg mx-6 my-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-coffeeBrown text-center">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-coffeeBrown">Your cart is empty.</p>
        ) : (
          <ul className="mb-6 space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center border border-coffeeBrown rounded p-4">
                <span>{item.name}</span>
                <span>₹{item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="text-right font-semibold text-coffeeBrown mb-6">Total: ₹{totalAmount.toFixed(2)}</p>

        <form onSubmit={handleSubmitOrder} className="flex flex-col space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 border border-coffeeBrown rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Contact Number"
            className="px-4 py-2 border border-coffeeBrown rounded"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <textarea
            placeholder="Address"
            className="px-4 py-2 border border-coffeeBrown rounded resize-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label className="block text-coffeeBrown font-semibold">
            Upload Payment Screenshot (file)
            <input
              type="file"
              accept="image/*"
              onChange={handlePaymentScreenshotChange}
              required
              className="mt-2"
            />
          </label>
          {formError && <p className="text-red-600">{formError}</p>}
          {orderSuccess && <p className="text-green-600">Order placed successfully!</p>}
          <button
            type="submit"
            className="bg-coffeeBrown text-cream py-3 rounded hover:bg-lightBrown transition"
          >
            Place Order
          </button>
        </form>
      </section>

      {/* Subscribe Section */}
      <SubscribeSection />

      <Footer />
    </div>
  );
}

export default Home;

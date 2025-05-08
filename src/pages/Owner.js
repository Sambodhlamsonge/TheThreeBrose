import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ItemsContext } from '../contexts/ItemsContext';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Orders from '../components/Orders';

function Owner() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const { items, addItem, deleteItem } = useContext(ItemsContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log('Owner items:', items);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      setMessage('Please fill all fields.');
      return;
    }
    const newItem = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      image: preview,
      description: '',
    };
    addItem(newItem);
    setMessage('Item added successfully!');
    setName('');
    setPrice('');
    setImageFile(null);
    setPreview(null);
  };

  const [activeTab, setActiveTab] = useState('addItem');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 py-12 bg-cream text-coffeeBrown max-w-7xl mx-auto">
        <div>
          <div className="flex justify-center mb-8 space-x-4">
            <button
              className={`px-4 py-2 rounded ${
                activeTab === 'addItem' ? 'bg-coffeeBrown text-cream' : 'bg-white text-coffeeBrown border border-coffeeBrown'
              }`}
              onClick={() => setActiveTab('addItem')}
            >
              Add Items
            </button>
            <button
              className={`px-4 py-2 rounded ${
                activeTab === 'orders' ? 'bg-coffeeBrown text-cream' : 'bg-white text-coffeeBrown border border-coffeeBrown'
              }`}
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </button>
          </div>

          {activeTab === 'addItem' && (
            <section className="max-w-md mx-auto bg-white p-6 rounded shadow">
              <h1 className="text-3xl font-semibold mb-6 text-center">Add New Item</h1>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 border border-coffeeBrown rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  className="px-4 py-2 border border-coffeeBrown rounded"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  className="px-4 py-2 border border-coffeeBrown rounded"
                  onChange={handleImageChange}
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-48 object-contain rounded mt-2"
                  />
                )}
                <button
                  type="submit"
                  className="bg-coffeeBrown text-cream py-3 rounded hover:bg-lightBrown transition"
                >
                  Add Item
                </button>
              </form>
              {message && <p className="mt-4 text-center">{message}</p>}

              {items.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4 text-center">Added Items</h2>
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="border border-coffeeBrown rounded p-4 flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-contain rounded" />
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          <p className="text-coffeeBrown">${item.price.toFixed(2)}</p>
                        </div>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                          aria-label={`Delete ${item.name}`}
                        >
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {activeTab === 'orders' && (
            <section className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
              <h2 className="text-2xl font-semibold mb-6 text-center">Orders</h2>
            </section>
          )}

          {/* Orders Section */}
          <section className="flex-1 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-6 text-center">Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Orders />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Owner;

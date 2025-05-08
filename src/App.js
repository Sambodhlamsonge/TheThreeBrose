import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Owner from './pages/Owner';
import { ItemsProvider } from './contexts/ItemsContext';
import { AuthProvider } from './contexts/AuthContext';
import { OrdersProvider } from './contexts/OrdersContext';

function App() {
  return (
    <AuthProvider>
      <ItemsProvider>
        <OrdersProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/owner" element={<Owner />} />
          </Routes>
        </OrdersProvider>
      </ItemsProvider>
    </AuthProvider>
  );
}

export default App;

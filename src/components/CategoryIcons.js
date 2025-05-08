import React from 'react';
import { FaCoffee, FaUtensils, FaTruck, FaTags } from 'react-icons/fa';

const categories = [
  { id: 1, icon: <FaCoffee />, label: 'Coffee' },
  { id: 2, icon: <FaUtensils />, label: 'Food' },
  { id: 3, icon: <FaTruck />, label: 'Delivery' },

];

function CategoryIcons() {
  return (
    <section className="flex justify-center space-x-12 py-8 bg-cream">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center text-coffeeBrown cursor-pointer hover:text-lightBrown transition"
          aria-label={category.label}
        >
          <div className="text-4xl mb-2">{category.icon}</div>
          <span className="text-sm font-semibold">{category.label}</span>
        </div>
      ))}
    </section>
  );
}

export default CategoryIcons;

import React from 'react';
import ProductCard from './ProductCard';

function FeaturedSection({ items, addToCart }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="px-6 py-12 bg-cream rounded-lg mx-6 my-12">
      <h2 className="text-3xl font-semibold mb-8 text-center text-coffeeBrown">Our Special Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;

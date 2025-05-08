import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-cream rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-coffeeBrown font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-coffeeBrown flex-grow">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-coffeeBrown">₹{product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-coffeeBrown text-cream px-4 py-2 rounded-full hover:bg-lightBrown transition"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

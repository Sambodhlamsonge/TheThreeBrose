import React from 'react';

function ReviewCard({ review }) {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < review.rating ? 'text-coffeeBrown' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
      </svg>
    ));

  return (
    <div className="bg-cream rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <img
        src={review.avatar}
        alt={`Avatar of ${review.name}`}
        className="w-16 h-16 rounded-full mb-4 object-cover"
        loading="lazy"
      />
      <h3 className="font-semibold text-coffeeBrown mb-2">{review.name}</h3>
      <div className="flex justify-center mb-4" aria-label={`Rating: ${review.rating} out of 5 stars`}>
        {stars}
      </div>
      <p className="text-sm text-coffeeBrown">{review.review}</p>
    </div>
  );
}

export default ReviewCard;

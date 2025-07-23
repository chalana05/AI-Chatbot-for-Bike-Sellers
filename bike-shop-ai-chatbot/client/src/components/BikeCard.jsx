import React from 'react';

export default function BikeCard({ bike, onBuy }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={bike.image} alt={bike.name} className="w-full h-32 object-cover mb-2" />
      <h3 className="text-lg font-bold">{bike.name}</h3>
      <p className="text-gray-700">{bike.price}</p>
      <button onClick={onBuy} className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
        Buy
      </button>
    </div>
  );
}

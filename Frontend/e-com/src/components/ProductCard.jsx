import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-950 border border-zinc-700 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-purple-500/30">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-purple-400">{product.name}</h2>
        <p className="text-sm text-gray-400 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-green-400">₹{product.price}</span>
          <button className="px-4 py-1 bg-purple-700 text-white rounded hover:bg-purple-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

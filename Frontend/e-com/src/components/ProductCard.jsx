import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold mt-2">₹{product.price}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

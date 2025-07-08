import React from "react";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "Organic Honey",
    description: "Pure and local farm honey.",
    price: 250,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Handmade Soap",
    description: "Natural herbal soap, handmade.",
    price: 120,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Desi Ghee",
    description: "Village-made 100% pure desi ghee.",
    price: 500,
    image: "https://via.placeholder.com/300x200",
  },
];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Local Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

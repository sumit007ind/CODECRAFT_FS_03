import React from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const dummyProducts = [
  {
    id: 1,
    name: "Organic Honey",
    description: "Pure and local farm honey.",
    price: 250,
    image: "https://media.istockphoto.com/id/520733611/photo/jar-of-honey-with-honeycomb.jpg?s=612x612&w=0&k=20&c=k7s6XnJvM1O3kLfy5XUn1M169j11Zcca9rFgvIBGkUE=",
  },
  {
    id: 2,
    name: "Handmade Soap",
    description: "Natural herbal soap, handmade.",
    price: 120,
    image: "https://cdn.pixabay.com/photo/2020/03/13/03/58/handmade-soap-4926841_1280.jpg",
  },
  {
    id: 3,
    name: "Desi Ghee",
    description: "Village-made 100% pure desi ghee.",
    price: 500,
    image: "https://static.vecteezy.com/system/resources/thumbnails/015/933/280/small/pure-tup-or-desi-ghee-also-known-as-clarified-liquid-butter-free-photo.jpg",
  },
  {
    id: 4,
    name: "Fresh Pickles",
    description: "Traditional homemade spicy mango pickles.",
    price: 150,
    image: "https://cdn.pixabay.com/photo/2020/05/30/07/36/achar-5238902_1280.jpg",
  },
  {
    id: 5,
    name: "Wooden Crafts",
    description: "Hand-carved wooden decorative items.",
    price: 800,
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/crafts-1868415_1280.jpg",
  },
  {
    id: 6,
    name: "Jaggery Powder",
    description: "Chemical-free organic jaggery powder.",
    price: 90,
    image: "https://cdn.pixabay.com/photo/2023/02/01/14/08/jaggery-7760646_1280.jpg",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

    
      <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-400">
          Bringing Local Products to Your Doorstep
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Shop directly from nearby vendors & artisans and support your local economy.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold">
          Start Shopping
        </button>
      </section>

   
      <section className="px-6 py-8 bg-zinc-900 text-white flex flex-col md:flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 rounded-md bg-zinc-800 border border-zinc-600 w-full md:w-1/2"
        />
        <select className="px-4 py-2 rounded-md bg-zinc-800 border border-zinc-600 w-full md:w-1/4">
          <option value="">All Categories</option>
          <option value="food">Food</option>
          <option value="crafts">Crafts</option>
          <option value="wellness">Wellness</option>
        </select>
      </section>

    
      <section className="px-6 py-8 bg-zinc-900 text-white">
        <h2 className="text-2xl font-bold text-purple-300 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

     
      <section className="px-6 py-12 bg-zinc-800 text-white text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">Why Shop Local?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Local shopping supports small businesses, reduces environmental impact, and keeps your community thriving.
        </p>
      </section>

      <section className="px-6 py-12 bg-zinc-900 text-white text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <blockquote className="bg-zinc-800 p-4 rounded shadow">
            <p className="italic">"Super fast delivery and the products are 100% genuine."</p>
            <footer className="mt-2 text-purple-300">- Priya S.</footer>
          </blockquote>
          <blockquote className="bg-zinc-800 p-4 rounded shadow">
            <p className="italic">"Love supporting local artisans. The soap smells amazing!"</p>
            <footer className="mt-2 text-purple-300">- Aarav K.</footer>
          </blockquote>
          <blockquote className="bg-zinc-800 p-4 rounded shadow">
            <p className="italic">"Finally a marketplace for local products. Great job!"</p>
            <footer className="mt-2 text-purple-300">- Meena R.</footer>
          </blockquote>
        </div>
      </section>

    
      <section id="contact" className="px-6 py-12 bg-zinc-800 text-white text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">About LocalMart</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We are a community-driven platform helping small businesses thrive in the digital age. Based in [Your City], we focus on quality, sustainability, and local pride.
        </p>
      </section>

      
      <section className="px-6 py-12 bg-purple-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">🚚 Free Local Delivery!</h2>
        <p className="text-md">Get same-day delivery on orders above ₹300 in select areas.</p>
      </section>

      <Footer />
    </>
  );
};

export default Home;

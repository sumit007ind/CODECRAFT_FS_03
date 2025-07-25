import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  const closeModal = () => {
    setOrderPlaced(false);
    setFormData({ name: "", address: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-zinc-800 p-6 rounded-2xl shadow-lg"
      >
        <div className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-zinc-700 text-white rounded-xl focus:outline-none"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleChange}
            className="p-3 bg-zinc-700 text-white rounded-xl focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-zinc-700 text-white rounded-xl focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 bg-zinc-700 text-white rounded-xl focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-full text-lg font-semibold transition"
        >
          Place Order
        </button>
      </form>

      
      <AnimatePresence>
        {orderPlaced && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white text-zinc-800 max-w-md w-full p-6 rounded-2xl shadow-2xl text-center"
            >
              <h2 className="text-2xl font-bold mb-2">🎉 Order Confirmed!</h2>
              <p className="text-gray-600 mb-4">
                Thank you, {formData.name}! Your order has been placed and will
                be delivered soon 🚚
              </p>
              <button
                onClick={closeModal}
                className="mt-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full"
              >
                Continue Shopping
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Checkout;

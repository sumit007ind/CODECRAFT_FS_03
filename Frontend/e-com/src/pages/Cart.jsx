import React from "react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Organic Honey",
      price: 250,
      quantity: 1,
      image:
        "https://media.istockphoto.com/id/520733611/photo/jar-of-honey-with-honeycomb.jpg",
    },
    {
      id: 2,
      name: "Handmade Soap",
      price: 120,
      quantity: 2,
      image:
        "https://cdn.pixabay.com/photo/2020/03/13/03/58/handmade-soap-4926841_1280.jpg",
    },
  ];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-zinc-800 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-xl"
            />
            <div className="flex-1">
              <h4 className="text-xl font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-400">
                ₹{item.price} x {item.quantity}
              </p>
            </div>
            <div className="text-lg font-bold text-purple-400">
              ₹{item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 max-w-4xl mx-auto flex justify-between items-center text-xl font-semibold">
        <span>Total:</span>
        <span className="text-purple-400">₹{totalPrice}</span>
      </div>
      <div className="mt-6 text-center">
        <a
          href="/checkout"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white text-lg font-semibold transition"
        >
          Proceed to Checkout
        </a>
      </div>
    </div>
  );
};

export default Cart;

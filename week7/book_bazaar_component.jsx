import React, { useState } from "react";

export default function BookBazaar() {
  const [cart, setCart] = useState([]);

  const books = [
    { id: 1, title: "Atomic Habits", price: 499 },
    { id: 2, title: "The Alchemist", price: 299 },
    { id: 3, title: "Rich Dad Poor Dad", price: 399 }
  ];

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-white p-6">
      <header className="bg-blue-500 text-white text-center py-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">📖 Book Bazaar</h1>
        <p>Discover. Add. Enjoy Reading.</p>
      </header>

      <main className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
        <div className="md:col-span-2 bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Available Books</h2>
          {books.map((book) => (
            <div
              key={book.id}
              className="flex justify-between items-center border-b border-gray-200 py-2"
            >
              <span>
                {book.title} - ₹{book.price}
              </span>
              <button
                onClick={() => addToCart(book)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">🛒 Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex justify-between py-1">
                <span>{item.title}</span>
                <span>₹{item.price}</span>
              </div>
            ))
          )}
          <div className="text-right font-semibold mt-3">Total: ₹{total}</div>
        </div>
      </main>

      <footer className="text-center mt-8 text-sm text-gray-600">
        © 2025 Book Bazaar. All rights reserved.
      </footer>
    </div>
  );
}

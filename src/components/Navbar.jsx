import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div class="w-full mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <div>
            <a
              href="#"
              class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <svg
                class="h-6 w-6 mr-1 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span class="font-bold text-2xl">EStore</span>
            </a>
          </div>
        </div>
        <div class="md:flex items-center space-x-1">
          <Link to="/cart">
          <button
            type="button"
            class="bg-yellow-400 text-black p-2 rounded  leading-none flex items-center"
          >
            Cart{" "}
            <span class="bg-white p-1 rounded text-blue-600 text-xs ml-2">
              {cartItems.length}
            </span>
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

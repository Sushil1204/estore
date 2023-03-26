import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  increase, decrease, removeProduct } from "../redux/reducers/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  };

  if (cartItems.length <= 0) {
    return <div className="empty">Your Bag is Empty...</div>;
  }
  return (
    <div
      className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
      id="chec-div"
    >
      <div
        className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
        id="checkout"
      >
        <div className="flex md:flex-row flex-col justify-end" id="cart">
          <div
            className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
            id="scroll"
          >
            <div
              className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <Link to="/">
                <p className="text-sm pl-2 leading-none">Back</p>
                </Link>
            </div>
            <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
              Bag
            </p>
            {cartItems?.map((item) => (
              <div className="md:flex items-center mt-14 py-8 border-t border-gray-200" key={item.id}>
                <div className="w-1/4">
                  <img
                    src={item.image}
                    alt
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    RF293
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      {item.title}
                    </p>
                    <div className="my-5">
                      <div className="flex flex-row justify-between">
                        <div className="flex">
                          <span
                             onClick={() => {
                              if(item.amount <= 0) {
                                dispatch(removeProduct(item.id));
                              }
                              dispatch(decrease(item.id));
                            }}
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                          >
                            -
                          </span>
                          <span className="border border-gray-300 h-full text-center w-14 pb-1">{item.amount}</span>
                          <span
                             onClick={() => dispatch(increase(item.id))}
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={() => dispatch(removeProduct(item.id))}>
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      $ {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
              <div>
                <p className="text-4xl font-black leading-9 text-gray-800">
                  Summary
                </p>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-gray-800">
                    Subtotal
                  </p>
                  <p className="text-base leading-none text-gray-800">$ {calculateTotal().toString()}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p className="text-2xl leading-normal text-gray-800">Total</p>
                  <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                    $ Subtotal: ${calculateTotal().toString()}
                  </p>
                </div>
                <button
                  onClick={() => setShow(!show)}
                  className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

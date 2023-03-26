import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getProduct = async () => {
      const resp = await axios.get(`${API_URL}/${productId}`);
      const data = await resp.data;
        setProduct(data);
    };
    getProduct();
}, [productId]);
console.log(product);
return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        {/* <!-- Description Div --> */}

        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
            {product.title}
          </h2>
          <div className=" flex flex-row justify-between  mt-5">
            <div className=" flex flex-row space-x-3">
              <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-xl leading-4 text-gray-700 hover:text-gray-900 duration-100 cursor-pointer">
                4.1 stars
              </p>
            </div>
            <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-xl leading-4 text-gray-700 hover:text-gray-800 duration-100 cursor-pointer">
              22 reviews
            </p>
          </div>

          <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
            {product.description}
          </p>
          <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
            $ {product.price}
          </p>

          <hr className=" bg-indigo-900 w-full h-1 my-2" />

          <button
            className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
                    onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

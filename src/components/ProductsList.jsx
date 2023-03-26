import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/reducers/productSlice";
import { addToCart } from "../redux/reducers/cartSlice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const { isLoading, products } = useSelector((state) => state.products);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>LOADING.....</h2>
      </div>
    );
  }

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
        <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
          Leatest Product
        </p>
      </div>
      <div className="py-6 lg:px-20 md:px-6 px-4">
        <input
          className=" font-normal text-2xl leading-3 text-gray-600 py-3 px-5 outline-0"
          placeholder="Search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <hr className=" w-full bg-gray-200 my-6" />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {products &&
            products
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((product) => (
                <div key={product.id}>
                  <div className=" relative group">
                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <img
                      className="w-50 h-80 mx-auto"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                      <button
                        className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add to bag
                      </button>
                      <Link to={`/product/${product.id}`}>
                        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                          Get Details
                        </button>
                      </Link>
                    </div>
                  </div>
                  <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                    {product.title.substr(0, 30)}
                  </p>
                  <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
                    $ {product.price}
                  </p>
                  <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
                    {`Category: ${product.category}`}
                  </p>
                </div>
              ))}
        </div>

        <div className=" flex justify-center items-center">
          <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

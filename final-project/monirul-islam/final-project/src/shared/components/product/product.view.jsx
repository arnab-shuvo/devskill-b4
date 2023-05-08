import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    ShoppingCartIcon,
    SearchIcon,
    ArrowCircleLeftIcon,
} from "@heroicons/react/solid";
import { PRODUCT, BASE_URL } from "utils/constants";

export default function ProductView({
    products,
    viewDetails,
    cartHandler,
    cartLoader,
    categories,
}) {
    const [search, setSearch] = useState("");
    const [productState, setProductState] = useState(products);

    if (typeof cartLoader !== "boolean") cartLoader = false;

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleCategory = (event) => {
        const id = event.target.value;
        setProductState((prevState) => {
            if (id === "") return products;
            else return products.filter((item) => item.category._id === id);
        });
    };

    const handleSearch = (search) => {
        setProductState((prevState) => {
            if (search === "") return products;
            else
                return products.filter((item) =>
                    item.title.toLowerCase().includes(search.toLowerCase()),
                );
        });
    };

    return (
        <section>
            {/* <div className="w-3/4 mx-auto flex flex-col py-16">
                <h2 className="text-4xl">Some of the products</h2>
                <p className="text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Hic veritatis illum, laudantium natus architecto animi!
                </p>
            </div> */}
            <div className="container mx-auto md:px-16 pt-4 pb-12">
                <div className="w-full flex justify-start">
                    <NavLink
                        to={PRODUCT}
                        className={
                            "text-lg text-left font-light transform transition-all hover:scale-110 text-red-400 hover:text-red-600 flex justify-center items-center flex-col md:flex-row" +
                            (search === "" ? " hidden" : "")
                        }
                    >
                        <ArrowCircleLeftIcon className="h-10 w-10 mb-2 md:mr-2 md:mb-0" />
                        <p>All Products</p>
                    </NavLink>
                </div>
                <div className="py-6 px-4 mb-12 flex items-center border-b-2">
                    <select
                        id="category"
                        name="category"
                        className="input bg-white rounded-lg w-1/3"
                        onChange={handleCategory}
                    >
                        <option value="">Filter by Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    <div className="w-1/3 border-2 rounded-lg flex justify-middle items-center">
                        <input
                            type="text"
                            id="search"
                            value={search}
                            onChange={handleChange}
                            className="input border-0 flex-grow"
                            placeholder="Search Products"
                        />
                        <button
                            className="p-4 hover:bg-gray-300 hover:text-black rounded-lg"
                            onClick={() => handleSearch(search)}
                        >
                            <SearchIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center ">
                    {productState.map((product, index) => {
                        return (
                            <div
                                key={index}
                                className="w-full md:w-1/3 xl:w-1/4 px-16 py-6 md:p-6 rounded-lg flex flex-col hover:shadow-xl"
                                style={{ minWidth: "15rem" }}
                            >
                                <img
                                    className="hover:grow object-contain h-48 w-full cursor-pointer"
                                    src={BASE_URL + product.image}
                                    alt={product.title}
                                    onClick={() => viewDetails(product._id)}
                                />
                                <div
                                    className="pt-3 flex items-center justify-between cursor-pointer"
                                    onClick={() => viewDetails(product._id)}
                                >
                                    <p className=" w-3/4 text-wrap">
                                        {product.title}
                                    </p>
                                    <p className="pt-2 text-gray-900 text-right font-semibold">
                                        ${product.price}
                                    </p>
                                </div>
                                <div className="w-full pt-4 flex justify-between items-center">
                                    <p className="rounded-full text-white bg-red-500 px-2 py-1 text-xs font-bold">
                                        {product.category.name}
                                    </p>
                                    <button
                                        className="btn text-sm font-bold px-2 py-1 hover:text-white hover:bg-red-500"
                                        disabled={cartLoader}
                                        onClick={() =>
                                            cartHandler(product._id, "add")
                                        }
                                    >
                                        <ShoppingCartIcon className="w-5 h-5 inline-block mr-1" />
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

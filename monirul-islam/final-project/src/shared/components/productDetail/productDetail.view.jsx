import React from "react";
import NotFound from "../404/404";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { BASE_URL } from "utils/constants";

export default function ProductView({
    product,
    calcDecimal,
    cartLoader,
    cartHandler,
}) {
    if (typeof cartLoader !== "boolean") cartLoader = false;

    return (
        <div className="min-w-screen min-h-screen mb-12 flex justify-center items-center p-5 lg:p-10 overflow-hidden relative">
            {!product ? (
                <NotFound message="Product with given ID not found!" />
            ) : (
                <div className="md:flex items-center">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <img
                            src={BASE_URL + product.image}
                            className="mx-auto w-11/12 md:w-3/4 p-8 h-full border-4 border-red-500"
                            alt={product.title}
                        />
                        <div className="relative">
                            <div className=" absolute top-30 bottom-10 left-10 right-20 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10 ">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-4xl mb-5">
                                {product.title}
                            </h1>
                            <p>{product.description}</p>
                        </div>

                        <div className="flex justify-around items-center">
                            <div className="align-bottom">
                                <span className="text-2xl leading-none align-baseline">
                                    $
                                </span>
                                <span className="font-bold text-5xl leading-none align-baseline">
                                    {Math.floor(product.price)}
                                </span>
                                <span className="text-2xl leading-none align-baseline">
                                    {calcDecimal(product.price)}
                                </span>
                            </div>
                            <button
                                className="btn text-lg md:text-2xl font-bold px-4 py-2 hover:text-white hover:bg-red-500"
                                disabled={cartLoader}
                                onClick={() => cartHandler(product._id, "add")}
                            >
                                <ShoppingCartIcon className="w-5 h-5 inline-block mr-1" />{" "}
                                Add to cart
                            </button>
                            <div className="rounded-full text-gray-500 border-2 px-2 py-1 md:px-4 md:py-2 text-base md:text-lg font-bold">
                                <p>{product.category.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

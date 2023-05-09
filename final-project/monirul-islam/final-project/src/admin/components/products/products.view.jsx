import React from "react";
import {
    PencilAltIcon,
    TrashIcon,
    ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import { BASE_URL } from "utils/constants";
import Loader from "shared/components/loader/loader";

export default function ProductsView({
    loader,
    productHandler,
    products,
    productDelete,
}) {
    return (
        <div className="min-h-screen min-w-screen">
            {loader ? (
                <Loader />
            ) : (
                <div className="py-16 flex flex-col">
                    <div className="w-full md:w-11/12 md:mx-auto shadow-md border-b border-gray-200 sm:rounded-lg">
                        <div className="mx-8 md:mx-16 my-8 flex justify-end items-center">
                            <button className="btn transform transition-all hover:scale-110 flex items-center justify-center">
                                <div
                                    onClick={() => productHandler()}
                                    className="mr-2 text-sm text-black"
                                >
                                    Add New Product
                                </div>
                                <ArrowCircleRightIcon className="h-5 w-5" />
                            </button>
                        </div>
                        <table className="table-fixed divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Category
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img
                                                        className="h-10 w-auto"
                                                        src={
                                                            BASE_URL +
                                                            product.image
                                                        }
                                                        alt={product.title}
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-md text-gray-900">
                                                        {product.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-md font-medium text-gray-900">
                                                {product.price}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-md font-medium text-gray-900">
                                                {product.category.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-md text-gray-500">
                                            <p>{product.description}</p>
                                        </td>
                                        <td className="px-6 py-4 flex justify-start items-center text-gray-600">
                                            <div
                                                className="cursor-pointer transform transition-all hover:scale-110"
                                                onClick={() =>
                                                    productHandler(product._id)
                                                }
                                            >
                                                <PencilAltIcon className="w-8 h-8" />
                                            </div>
                                            <div
                                                className="ml-2 cursor-pointer transform transition-all hover:scale-110"
                                                onClick={() =>
                                                    productDelete(product._id)
                                                }
                                            >
                                                <TrashIcon className="w-8 h-8" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

import React from "react";
import {
    PencilAltIcon,
    TrashIcon,
    ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import Loader from "shared/components/loader/loader";

export default function CategoriesView({
    loader,
    categories,
    categoryHandler,
    categoryDelete,
}) {
    return (
        <div className="min-w-screen min-h-screen">
            {loader ? (
                <Loader />
            ) : (
                <div className="container mx-auto px-8 lg:px-16 pt-16 flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="w-full md:w-11/12 mx-auto shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <div className="mx-8 md:mx-16 my-8 flex justify-end items-center">
                                    <button className="btn transform transition-all hover:scale-110 flex items-center justify-center">
                                        <div
                                            onClick={() => categoryHandler()}
                                            className="mr-2 text-sm text-black"
                                        >
                                            Add New Category
                                        </div>
                                        <ArrowCircleRightIcon className="h-5 w-5" />
                                    </button>
                                </div>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Name
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
                                        {categories.map((category, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img
                                                                className="h-10 w-auto"
                                                                src={
                                                                    category.image
                                                                }
                                                                alt={
                                                                    category.name
                                                                }
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-md text-gray-900">
                                                                {category.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-gray-700 text-base">
                                                        {category.description}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 flex justify-start items-center whitespace-nowrap text-gray-600">
                                                    <div
                                                        className="cursor-pointer transform transition-all hover:scale-110"
                                                        onClick={() =>
                                                            categoryHandler(
                                                                category._id,
                                                            )
                                                        }
                                                    >
                                                        <PencilAltIcon className="w-8 h-8" />
                                                    </div>
                                                    <div
                                                        className="ml-2 cursor-pointer transform transition-all hover:scale-110"
                                                        onClick={() =>
                                                            categoryDelete(
                                                                category._id,
                                                            )
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
                    </div>
                </div>
            )}
        </div>
    );
}

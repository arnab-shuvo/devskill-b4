import React from "react";
import {
    QuestionMarkCircleIcon,
    CheckCircleIcon,
    XCircleIcon,
} from "@heroicons/react/solid";
import Loader from "shared/components/loader/loader";
import Navbar from '../navbar/navbar.jsx';

export default function OrdersView({ loader, orders, orderHandler }) {
    return (
       <>
         <Navbar/>
        
         <section className="mb-24 flex flex-col justify-center md:justify-start my-auto md:pt-0 px-4 md:px-8 lg:px-32">
     
        <div className="min-w-screen min-h-screen h-full">
            {loader ? (
                <Loader />
            ) : (
                <div className="container mx-auto px-8 lg:px-16 pt-10 pl-100 flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="w-full md:w-11/12 mx-auto shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Order of
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Order time
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Shipping Address
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
                                        {orders.map((order, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4">
                                                    <div className="text-md font-medium text-gray-900">
                                                        {`${order.userId?.firstname} ${order.userId?.lastname}`}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        @
                                                        {order.userId?.username}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-md font-medium text-gray-900">
                                                        {new Date(
                                                            order.date,
                                                        ).toUTCString()}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                                                        {order.status === 0 ? (
                                                            <span className="inline-block bg-yellow-300 px-2 py-1 rounded-full">
                                                                Pending
                                                            </span>
                                                        ) : order.status ===
                                                          1 ? (
                                                            <span className="inline-block bg-green-300 px-2 py-1 rounded-full">
                                                                Delivered
                                                            </span>
                                                        ) : (
                                                            <span className="inline-block bg-red-300 px-2 py-1 rounded-full">
                                                                Cancelled
                                                            </span>
                                                        )}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-md text-gray-500">
                                                    <p>
                                                        {`${order.userId?.address.number}, ${order.userId?.address.city}- ${order.userId?.address.street}-${order.userId?.address.zipcode}`}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4 mt-4 flex justify-start items-center text-gray-600">
                                                    <button
                                                        className="cursor-pointer transform transition-all hover:scale-125 disabled:opacity-30 disabled:scale-100"
                                                        disabled={
                                                            order.status === 0
                                                        }
                                                        onClick={() =>
                                                            orderHandler(
                                                                order._id,
                                                                0,
                                                            )
                                                        }
                                                    >
                                                        <QuestionMarkCircleIcon className="w-8 h-8 text-yellow-400" />
                                                    </button>
                                                    <button
                                                        className="ml-2 p-1 rounded-full cursor-pointer transform transition-all hover:scale-125 disabled:opacity-30 disabled:scale-100"
                                                        disabled={
                                                            order.status === 1
                                                        }
                                                        onClick={() =>
                                                            orderHandler(
                                                                order._id,
                                                                1,
                                                            )
                                                        }
                                                    >
                                                        <CheckCircleIcon className="w-8 h-8 text-green-400" />
                                                    </button>
                                                    <button
                                                        className="ml-2 cursor-pointer transform transition-all hover:scale-125 disabled:opacity-30 disabled:scale-100"
                                                        disabled={
                                                            order.status === 2
                                                        }
                                                        onClick={() =>
                                                            orderHandler(
                                                                order._id,
                                                                2,
                                                            )
                                                        }
                                                    >
                                                        <XCircleIcon className="w-8 h-8 text-red-400" />
                                                    </button>
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
        </section>
        </>
    );
}

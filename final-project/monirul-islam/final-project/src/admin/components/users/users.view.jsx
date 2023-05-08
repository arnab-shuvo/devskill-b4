import React from "react";
import {
    PencilAltIcon,
    TrashIcon,
    ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import Loader from "shared/components/loader/loader";

export default function UsersView({ loader, users, userHandler, userDelete }) {
    console.log(users);
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
                                            onClick={() => userHandler()}
                                            className="mr-2 text-sm text-black"
                                        >
                                            Add New User
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
                                                Name and Username
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Email and Phone
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Role
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Address
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
                                        {users.map((user, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-md font-medium text-gray-900">
                                                        {`${user.firstname} ${user.lastname}`}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        @{user.username}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-md font-medium text-gray-900">
                                                        {user.email}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {user.phone}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                            user.role.toLowerCase() ===
                                                            "admin"
                                                                ? "bg-green-100 text-green-900"
                                                                : "bg-red-100 text-red-900"
                                                        }`}
                                                    >
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                                                    <p>
                                                        {`${user.address.number}, ${user.address.city}-${user.address.zipcode}`}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4 flex justify-start items-center whitespace-nowrap text-gray-600">
                                                    <div
                                                        className="cursor-pointer transform transition-all hover:scale-110"
                                                        onClick={() =>
                                                            userHandler(
                                                                user._id,
                                                            )
                                                        }
                                                    >
                                                        <PencilAltIcon className="w-8 h-8" />
                                                    </div>
                                                    <div
                                                        className="ml-2 cursor-pointer transform transition-all hover:scale-110"
                                                        onClick={() =>
                                                            userDelete(user._id)
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

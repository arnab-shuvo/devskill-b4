import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { loginSelector } from "shared/components/login/login.slice";
import {productInitialState}  from '../../../shared/components/login/login.slice';
   
import logo from "assets/images/logo.png";
import {
    HOME,
    PRODUCT,
    ABOUT,
    LOGIN,
    SIGNUP,
    LOGOUT,
    PROFILE,
    CART,
    ADMIN_USERS,
    ADMIN_PROFILE,
} from "utils/constants";
import { useSelector } from "react-redux";

export const navigationItems = [
    { name: "Home", href: HOME },
    { name: "View Products", href: PRODUCT },
    { name: "About", href: ABOUT },
];
export const publicItems = [
    { name: "Login", href: LOGIN },
    { name: "Sign up", href: SIGNUP },
];

export const privateItems = [
    { name: "Profile", href: PROFILE },
    { name: "Logout", href: LOGOUT },
];

export default function Navbar() {
    const isLoggedIn = useSelector(loginSelector);

    console.log(isLoggedIn);
    const profileItems = isLoggedIn ? privateItems : publicItems;

    let navItems = [];

    if (isLoggedIn && sessionStorage.getItem("role") === "admin") {
        navItems = [
            ...navigationItems,
            { name: "Cart", href: CART },
            { name: "Admin", href: ADMIN_PROFILE },
        ];
    } else if (isLoggedIn) {
        navItems = [...navigationItems, { name: "Cart", href: CART }];
    } else {
        navItems = navigationItems;
    }

    return (
        <Disclosure as="nav" className="bg-white sticky shadow-md">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <NavLink
                                    to={HOME}
                                    className="flex items-center"
                                >
                                    <img
                                        className="h-8 w-auto mr-1"
                                        src={logo}
                                        alt="logo for site"
                                    />
                                    <p className="text-2xl font-semibold h-8 mt-2" style={{color:"blue"}}>
                                        E-SHOP
                                    </p>
                                </NavLink>
                                <div className="hidden sm:block sm:ml-auto">
                                    <div className="flex space-x-4">
                                        {navItems.map((item, index) => (
                                            <NavLink
                                                key={index}
                                                to={item.href}
                                                activeClassName="border-b-4 border-red-400"
                                                className="px-4 pt-3 pb-2 text-md font-medium transform transition-all hover:scale-110 hover:shadow-md hover:bg-red-100 text-gray-600 hover:text-gray-800"
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-4">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Menu.Button className="bg-green-800 flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                                                    <span className="sr-only">
                                                        Open user menu
                                                    </span>
                                                    <div className="h-6 w-25 text-center bg-gradient-to-r from-blue-100 to-blue-400">{productInitialState.userInfo.user===null? <NavLink
                                                   to={LOGIN}>
                                        <h1 className="text-gray-600 block text-base font-medium" style={{color:"red"}}>Login</h1></NavLink>:productInitialState.userInfo.user}</div>
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    static
                                                    className="origin-top-right absolute z-0 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                    {profileItems.map(
                                                        (item, index) => (
                                                            <Menu.Item
                                                                key={index}
                                                            >
                                                                <NavLink
                                                                    to={
                                                                        item.href
                                                                    }
                                                                    activeClassName="border-b-4 border-red-400"
                                                                    className="p-4 text-gray-600 block text-base font-medium transform transition-all hover:scale-110 hover:shadow-md hover:bg-red-400 hover:text-gray-700 rounded-lg"
                                                                >
                                                                    {item.name}
                                                                </NavLink>
                                                            </Menu.Item>
                                                        ),
                                                    )}
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    )}
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.href}
                                    activeClassName="border-b-4 border-red-400 rounded-none"
                                    className="mx-8 py-2 text-gray-600 block text-base font-medium z-10"
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

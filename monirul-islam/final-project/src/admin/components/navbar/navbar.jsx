import React, { useEffect,Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { loginSelector } from "shared/components/login/login.slice";
import logo from "assets/images/logo.png";
import {productInitialState}  from '../../../shared/components/login/login.slice';
import {
    UserCircleIcon,
    ViewGridIcon,
    BriefcaseIcon,
    ShoppingCartIcon,
    ArrowCircleLeftIcon,
} from "@heroicons/react/solid";

import {
    LOGOUT,
    ADMIN_USERS,
    ADMIN_PRODUCTS,
    ADMIN_ORDERS,
    ADMIN_CATEGORIES,
    PRODUCT,
    HOME,
    LOGIN,
    SIGNUP,
    PROFILE,
    CART,
    ADMIN_HOME,
    ADMIN_PROFILE,
} from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector } from "client/components/profile/profile.slice";
import { getUserInfo } from "../../../client/components/profile/profile.thunk";

export const navigationItems = [
    { name: "Home", to: HOME },
    //  { name: "Users", to: ADMIN_USERS },
    { name: "Create Product", to: ADMIN_PRODUCTS },
    { name: "Orders", to: ADMIN_ORDERS },
    { name: "Categories", to: ADMIN_CATEGORIES },
    { name: "View Products", to: PRODUCT },
];
export const publicItems = [
    { name: "Login", to: LOGIN },
    { name: "Sign up", to: SIGNUP },
];

export const privateItems = [
    { name: "Profile", to: PROFILE },
    { name: "Logout", to: LOGOUT },
];

export default function AdminNavbar() {
    const dispatch = useDispatch();
    const user = useSelector(userInfoSelector);

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);

    // const navItems = [
    //     {
    //         name: "users",
    //         to: ADMIN_USERS,
    //         component: <UserCircleIcon className="h-5 w-5" />,
    //     },
    //     {
    //         name: "products",
    //         to: ADMIN_PRODUCTS,
    //         component: <BriefcaseIcon className="h-5 w-5" />,
    //     },
    //     {
    //         name: "categories",
    //         to: ADMIN_CATEGORIES,
    //         component: <ViewGridIcon className="h-5 w-5" />,
    //     },
    //     {
    //         name: "orders",
    //         to: ADMIN_ORDERS,
    //         component: <ShoppingCartIcon className="h-5 w-5" />,
    //     },
    // ];
   
    const isLoggedIn = useSelector(loginSelector);

    console.log(isLoggedIn);
    const profileItems = isLoggedIn ? privateItems : publicItems;

    let navItems = [];

    if (isLoggedIn && sessionStorage.getItem("role") === "admin") {
        navItems = [
            ...navigationItems,
            { name: "Users", to: ADMIN_USERS },
            { name: "Admin", to: ADMIN_PROFILE },
        ];
    } else if (isLoggedIn) {
        navItems = [...navigationItems, { name: "Cart", href: CART }];
    } else {
        navItems = navigationItems;
    }

    return (

        <Disclosure as="nav" className="bg-stone-100 sticky shadow-md">
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
                                    <p className="text-2xl h-8 mt-2 font-semibold" style={{color:"blue"}}>
                                        E-SHOP
                                    </p>
                                </NavLink>
                                <div className="hidden sm:block sm:ml-auto">
                                    <div className="flex space-x-4">
                                        {navItems.map((item, index) => (
                                            <NavLink
                                                key={index}
                                                to={item.to}
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
                                                                        item.to
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

        // <nav className="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
        //     {/* header */}
        //     <NavLink
        //         to={SHOP}
        //         className="flex items-center border-b-2 border-gray-600 lowercase justify-center pb-2"
        //     >
        //         <h1 className="text-xl font-semibold dark:text-gray-300" style={{color:"blue"}}>
        //         E-SHOP
        //         </h1>

        //     </NavLink>
        //     {/* user info */}
        //     <div className="mt-8">
        //         <h2 className="mt-4 text-2xl dark:text-gray-300 font-extrabold capitalize">
        //             {`Hello ${user.firstname} ${user.lastname}!`}
        //         </h2>
        //         <h4 className="font-semibold text-red-600 lowercase text-lg dark:text-green-300">
        //             {`@${user.username}`}
        //         </h4>
        //     </div>
        //     {/* navbar links */}
        //     <ul className="mt-2 text-gray-600">
        //         {navItems.map((item, index) => {
        //             return (
        //                 <li key={index} className="mt-8">
        //                     <NavLink
        //                         to={item.to}
        //                         className="flex"
        //                         activeClassName="shadow py-3 pl-4 bg-white rounded-lg"
        //                     >
        //                         {item.component}
        //                         <span
        //                             className="ml-2 capitalize font-medium text-black
		// 				dark:text-gray-300"
        //                         >
        //                             {item.name}
        //                         </span>
        //                     </NavLink>
        //                 </li>
        //             );
        //         })}
        //     </ul>
        //     {/* logout */}
        //     <div className="mt-auto mx-auto flex items-center py-2 px-6 rounded-lg text-gray-700 hover:bg-gray-600 hover:text-white">
        //         <NavLink
        //             to={LOGOUT}
        //             className="flex justify-center items-center"
        //         >
        //             <ArrowCircleLeftIcon className="h-5 w-5" />
        //             <span className="ml-2 capitalize font-medium">log out</span>
        //         </NavLink>
        //     </div>
        // </nav>
    );
}

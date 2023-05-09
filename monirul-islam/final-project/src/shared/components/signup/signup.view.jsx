import React from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { LOGIN } from "utils/constants";
import signup from "assets/images/signup.jpg";
import { signupValidation, signupInitials } from "utils/validation";

export default function SignupView({ submitHandler, errorMessage }) {
    return (
        <section className="w-full flex flex-wrap">
            <section className="w-full md:w-1/2 flex flex-col">
                <div  className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-4 md:px-8 lg:px-32">
                    <Formik
                        initialValues={signupInitials}
                        validationSchema={signupValidation}
                        onSubmit={submitHandler}
                    >
                        {(formik) => {
                            return (
                                <Form className="flex flex-col pt-3 md:pt-8">
                                    {errorMessage ? (
                                        <p className="w-full px-2 py-4 mb-4 bg-red-500 text-center text-lg font-normal text-white">
                                            {errorMessage}
                                        </p>
                                    ) : null}
                                    <div className="flex flex-col pt-4">
                                        <label
                                            htmlFor="email"
                                            className="text-lg"
                                        >
                                            Email
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="example@email.com"
                                            className="input"
                                        />
                                        <ErrorMessage name="email">
                                            {(error) => (
                                                <p className="error-msg">
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="flex flex-col pt-4">
                                        <label
                                            htmlFor="password"
                                            className="text-lg"
                                        >
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder=""
                                            className="input"
                                        />
                                        <ErrorMessage name="password">
                                            {(error) => (
                                                <p className="error-msg">
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="flex flex-col pt-4">
                                        <label
                                            htmlFor="repassword"
                                            className="text-lg"
                                        >
                                            Confirm Password
                                        </label>
                                        <Field
                                            type="password"
                                            id="repassword"
                                            name="repassword"
                                            placeholder=""
                                            className="input"
                                        />
                                        <ErrorMessage name="repassword">
                                            {(error) => (
                                                <p className="error-msg">
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="flex flex-col pt-4">
                                        <label
                                            htmlFor="username"
                                            className="text-lg"
                                        >
                                            Username
                                        </label>
                                        <Field
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="i.e. ami@_23"
                                            className="input"
                                        />
                                        <ErrorMessage name="username">
                                            {(error) => (
                                                <p className="error-msg">
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="flex flex-col pt-4">
                                        <label
                                            htmlFor="phone"
                                            className="text-lg"
                                        >
                                            Phone No.
                                        </label>
                                        <Field
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            placeholder=""
                                            className="input"
                                        />
                                        <ErrorMessage name="phone">
                                            {(error) => (
                                                <p className="error-msg">
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="flex flex-col items-stretch md:flex-row md:justify-between pt-4">
                                        <div className="flex flex-col w-full md:w-1/2 md:pr-4">
                                            <label
                                                htmlFor="firstname"
                                                className="text-lg"
                                            >
                                                First Name
                                            </label>
                                            <Field
                                                type="text"
                                                id="firstname"
                                                name="firstname"
                                                placeholder=""
                                                className="input"
                                            />
                                            <ErrorMessage name="firstname">
                                                {(error) => (
                                                    <p className="error-msg">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
                                            <label
                                                htmlFor="lastname"
                                                className="text-lg"
                                            >
                                                Last Name
                                            </label>
                                            <Field
                                                type="text"
                                                id="lastname"
                                                name="lastname"
                                                placeholder=""
                                                className="input"
                                            />
                                            <ErrorMessage name="lastname">
                                                {(error) => (
                                                    <p className="error-msg">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch md:flex-row md:justify-between pt-4">
                                        <div className="flex flex-col w-full md:w-1/3 md:pr-2">
                                            <label
                                                htmlFor="city"
                                                className="text-lg"
                                            >
                                                City
                                            </label>
                                            <Field
                                                type="text"
                                                id="city"
                                                name="city"
                                                placeholder=""
                                                className="input"
                                            />
                                            <ErrorMessage name="city">
                                                {(error) => (
                                                    <p className="error-msg">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div className="flex flex-col w-full md:w-1/3 mt-4 md:mt-0 md:pr-2">
                                            <label
                                                htmlFor="street"
                                                className="text-lg"
                                            >
                                                Street
                                            </label>
                                            <Field
                                                type="text"
                                                id="street"
                                                name="street"
                                                placeholder=""
                                                className="input"
                                            />
                                            <ErrorMessage name="street">
                                                {(error) => (
                                                    <p className="error-msg">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div className="flex flex-col w-full md:w-1/3 mt-4 md:mt-0 md:pr-2">
                                            <label
                                                htmlFor="number"
                                                className="text-lg"
                                            >
                                                House No.
                                            </label>
                                            <Field
                                                type="number"
                                                id="number"
                                                name="number"
                                                placeholder=""
                                                className="input"
                                            />
                                            <ErrorMessage name="number">
                                                {(error) => (
                                                    <p className="error-msg">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch md:flex-row md:justify-between pt-4">
                                        <div className="flex flex-col w-full md:w-1/3 md:pr-2">
                                            <label
                                                htmlFor="city"
                                                className="text-lg"
                                            >
                                                ZIP Code
                                            </label>
                                            <Field
                                                type="number"
                                                id="zipcode"
                                                name="zipcode"
                                                placeholder=""
                                                className="input"
                                            />
                                            <ErrorMessage name="zipcode">
                                                {(error) => (
                                                    <p className="error-msg">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div className="flex flex-col w-full md:w-1/3 mt-4 md:mt-0 md:pr-2">
                                            <label
                                                htmlFor="lat"
                                                className="text-lg"
                                            >
                                                Latitude
                                            </label>
                                            <Field
                                                type="number"
                                                id="lat"
                                                name="lat"
                                                placeholder="i.e. 27.2046"
                                                className="input"
                                            />
                                            <ErrorMessage name="lat">
                                                {(error) => (
                                                    <p className="error-msg">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div className="flex flex-col w-full md:w-1/3 mt-4 md:mt-0 md:pr-2">
                                            <label
                                                htmlFor="long"
                                                className="text-lg"
                                            >
                                                Longitude
                                            </label>
                                            <Field
                                                type="number"
                                                id="long"
                                                name="long"
                                                placeholder="i.e. 77.4977"
                                                className="input"
                                            />
                                            <ErrorMessage name="long">
                                                {(error) => (
                                                    <p className="error-msg">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={
                                            !formik.isValid ||
                                            formik.isSubmitting
                                        }
                                        className="w-3/4 mx-auto mt-8 btn text-black hover:text-white hover:bg-red-900 hover:border-white"
                                    >
                                        Register
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                    <div className="text-center pt-12 pb-12">
                        <p>
                            Already an user?{" "}
                            <NavLink
                                to={LOGIN}
                                className="underline font-semibold text-red-400"
                            >
                                Log in here.
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-1/2 h-2/3 pt-20 pr-20  hidden md:flex md:items-center ">
                {/* <img
                    className="object-cover w-full h-screen hidden md:block"
                    src={signup}
                    alt="right-side cover"
                /> */}
                <img className="object-cover w-full h-screen hidden md:block"
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt="right-side cover"
                />
            </section>
        </section>
    );
}

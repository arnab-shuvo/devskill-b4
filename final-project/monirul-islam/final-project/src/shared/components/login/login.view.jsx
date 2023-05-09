import React from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from "assets/images/login.jpg";
import { SIGNUP } from "utils/constants";
import { loginValidationSchema } from "utils/validation";

export default function LoginView({ errorMessage, submitHandler }) {
    const notify = () => toast("Successfully Login!", {
        position: toast.POSITION.TOP_CENTER});
    
    return (
        <section className="w-full flex">
            <section className="w-full mx-auto lg:w-1/2 flex flex-col">
                <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={loginValidationSchema}
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
                                    <ToastContainer />
                                        <label
                                            htmlFor="email"
                                            className="text-lg"
                                        >
                                            Email
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            id="email"
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
                                            placeholder="********"
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
                                    <button
                                        onClick={notify}
                                        type="submit"
                                        disabled={
                                            !formik.isValid ||
                                            formik.isSubmitting
                                        }
                                        className="w-3/4 mx-auto mt-8 btn text-black hover:text-white hover:bg-red-900 hover:border-white"
                                    >
                                        Log in
                                    </button>
                                </Form>
                                
                            );
                        }}
                    </Formik>
                    <div className="text-center pt-12 pb-12">
                        <p>
                            Don't have an account?{" "}
                            <NavLink
                                to={SIGNUP}
                                className="underline font-semibold text-red-400"
                            >
                                Sign Up here.
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-1/2 hidden md:flex md:items-center">
                <img
                    className="object-cover w-full h-screen hidden md:block"
                    src={login}
                    alt="right-side cover"
                />
            </section>
        </section>
    );
}

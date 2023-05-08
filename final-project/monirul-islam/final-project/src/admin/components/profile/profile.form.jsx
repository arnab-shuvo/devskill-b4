import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Navbar from '../navbar/navbar';
import { editUserInfo } from "./profile.thunk";
import { resetForm, userInfoSelector, errorSelector } from "./profile.slice";

import { PROFILE } from "utils/constants";
import { signupValidation } from "utils/validation";

export default function ProfileForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = useSelector(userInfoSelector);
    const errorMessage = useSelector(errorSelector);
    console.log(initialValues);
    const submitHandler = (values, submitProps) => {
        
        dispatch(editUserInfo(values)).then(() => {
            submitProps.resetForm();
            dispatch(resetForm());
            navigate(PROFILE);
        });
    };

    return (
        <> <Navbar/>  
        <section className="container mx-auto flex flex-col justify-center items-center">
            <h1 className="mt-8 text-4xl font-light text-center">
                Update Profile Information
            </h1>
            <div className="mb-24 flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-4 md:px-8 lg:px-32">
                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
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
                                    <label htmlFor="email" className="text-lg">
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
                                            <p className="error-msg">{error}</p>
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
                                            <p className="error-msg">{error}</p>
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
                                            <p className="error-msg">{error}</p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="flex flex-col w-full">
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
                                            <p className="error-msg">{error}</p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="phone" className="text-lg">
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
                                            <p className="error-msg">{error}</p>
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
                                            type="text"
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
                                            type="text"
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
                                            type="text"
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
                                            type="text"
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
                                        !formik.isValid || formik.isSubmitting
                                    }
                                    className="w-3/4 mx-auto mt-8 btn text-black hover:text-white hover:bg-red-900 hover:border-white"
                                >
                                    Submit
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </section>
        </>
    );
}

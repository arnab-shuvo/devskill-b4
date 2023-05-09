import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Navbar from '../navbar/navbar.jsx';
import { categorySelector, errorSelector, resetForm } from "./categories.slice";
import { createUpdateCategory, getSingleCategory } from "./categories.thunk";
import Swal from 'sweetalert2';

import { categoryValidation } from "utils/validation";
import { ADMIN_CATEGORIES } from "utils/constants";

export default function CategoriesForm({ action }) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const initialValues = useSelector(categorySelector);
    const errorMessage = useSelector(errorSelector);

    useEffect(() => {
        if (action === "update") dispatch(getSingleCategory(id));
    }, [dispatch, action, id]);

    const submitHandler = (values, submitProps) => {
        dispatch(
            createUpdateCategory({ values: values, action: action, id: id }),
        ).then(() => {
            submitProps.resetForm();
            dispatch(resetForm());
            navigate(ADMIN_CATEGORIES);
            Swal.fire("categories create successfully");
        });
    };

    return (
        <>
            <Navbar/>
          
        <section className="w-3/4 mb-24 flex flex-col justify-center md:justify-start my-auto md:pt-0 px-4 md:px-8 lg:px-32">
            <h1 className="mt-5 text-3xl font-light text-center">
                {action === "update" ? "Update Category" : "Create Category"}
            </h1>
            <div className="mb-24 flex flex-col justify-center md:justify-start my-auto md:pt-0 px-4 md:px-8 lg:px-32">
                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    validationSchema={categoryValidation}
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
                                    <label htmlFor="name" className="text-lg">
                                        Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder=""
                                        className="input"
                                    />
                                    <ErrorMessage name="name">
                                        {(error) => (
                                            <p className="error-msg">{error}</p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="image" className="text-lg">
                                        Image
                                    </label>
                                    <Field>
                                        {() => (
                                            <input
                                                type="file"
                                                id="image"
                                                name="image"
                                                className="input"
                                                placeholder=""
                                                onChange={(event) => {
                                                    formik.setFieldValue(
                                                        "image",
                                                        event.currentTarget
                                                            .files[0],
                                                    );
                                                }}
                                            />
                                        )}
                                    </Field>

                                    <ErrorMessage name="image">
                                        {(error) => (
                                            <p className="error-msg">{error}</p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="flex flex-col pt-4">
                                    <label
                                        htmlFor="description"
                                        className="text-lg"
                                    >
                                        Description
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="description"
                                        name="description"
                                        placeholder=""
                                        className="input h-48"
                                    />
                                    <ErrorMessage name="description">
                                        {(error) => (
                                            <p className="error-msg">{error}</p>
                                        )}
                                    </ErrorMessage>
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
        </>);
}

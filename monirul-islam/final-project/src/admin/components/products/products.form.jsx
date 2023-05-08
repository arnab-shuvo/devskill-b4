import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Navbar from '../navbar/navbar.jsx';
import { errorSelector } from "./products.slice";
import { createUpdateProduct } from "./products.thunk";
import { getAllCategories } from "../categories/categories.thunk";
import { categoriesSelector } from "../categories/categories.slice";
import {
    productSelector,
    reset,
} from "shared/components/productDetail/productDetail.slice.js";
import Table from 'react-bootstrap/Table';
import { getSingleProduct } from "shared/components/productDetail/productDetail.thunk.js";

import { productValidation } from "utils/validation";
import { ADMIN_PRODUCTS } from "utils/constants";
import Swal from "sweetalert2";

export default function ProductsForm({ action }) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const categories = useSelector(categoriesSelector);
    const initialValues = useSelector(productSelector);
    const errorMessage = useSelector(errorSelector);

    useEffect(() => {
        dispatch(getAllCategories());
        if (action === "update") dispatch(getSingleProduct(id));
    }, [dispatch, action, id]);

    const submitHandler = (values, submitProps) => {
        dispatch(
            createUpdateProduct({ values: values, action: action, id: id }),
        ).then(() => {
            submitProps.resetForm();
            dispatch(reset());
            navigate(ADMIN_PRODUCTS);
            Swal.fire("Product Create Succesfully");
        });
    };

    return (
    <>
         <Navbar/>
           
        <section className="w-3/4 mb-24 flex flex-col justify-center md:justify-start my-auto md:pt-0 px-4 md:px-8 lg:px-32">
            <h1 className="mt-5 text-3xl font-light text-center">
                {action === "update" ? "Update Product" : "Create Product"}
            </h1>
            <div className="mb-24 flex flex-col justify-center md:justify-start my-auto md:pt-0 px-4 md:px-8 lg:px-32">
                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    validationSchema={productValidation}
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
                                    <label htmlFor="title" className="text-lg">
                                        Title
                                    </label>
                                    <Field
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder=""
                                        className="input"
                                    />
                                    <ErrorMessage name="title">
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
                                        htmlFor="category"
                                        className="text-lg"
                                    >
                                        Select a Category
                                    </label>
                                    <Field
                                        as="select"
                                        id="category"
                                        name="category"
                                        placeholder=""
                                        className="input bg-white"
                                    >
                                        <option value="">
                                            Select a Category
                                        </option>
                                        {categories.map((cat, index) => (
                                            <option key={index} value={cat._id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="category">
                                        {(error) => (
                                            <p className="error-msg">{error}</p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="flex flex-col md:flex-row pt-4">
                                    <div className="w-full md:w-1/2 flex flex-col md:mr-4">
                                        <label
                                            htmlFor="price"
                                            className="text-lg"
                                        >
                                            Price
                                        </label>
                                        <Field
                                            type="number"
                                            id="price"
                                            name="price"
                                            placeholder=""
                                            className="input"
                                        />
                                        <ErrorMessage name="price">
                                            {(error) => (
                                                <p className="error-msg">
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col">
                                        <label
                                            htmlFor="stock"
                                            className="text-lg"
                                        >
                                            Stock
                                        </label>
                                        <Field
                                            type="number"
                                            id="stock"
                                            name="stock"
                                            placeholder=""
                                            className="input"
                                        />
                                        <ErrorMessage name="stock">
                                            {(error) => (
                                                <p className="error-msg">
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </div>
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

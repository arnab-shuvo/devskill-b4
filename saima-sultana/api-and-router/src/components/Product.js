import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product = {} }) => {
    const { id, title, price, category, images = [] } = product;
    const navigate = useNavigate();
    const navigateToDetails = (id) => {
        navigate(`/products/${id}`);
    }
    return (
        <div
            className="max-w-xs rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                <img
                    className="rounded-t-lg"
                    src={images[0]}
                    alt="" />
            </a>
            <div className="p-6 h-36">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"> {title}
                </h5>
                <div className="flex flex-col p-2 text-sm text-left space-y-2">
                    <p><b>Category:  </b>{category?.name}</p>
                    <p><b>Price:   </b>${price}</p>
                </div>
            </div>
                <button onClick={() => navigateToDetails(id)}
                    type="button"
                    className="inline-block rounded bg-primary my-5 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Show Details
                </button>
        </div>
    );
};

export default Product;
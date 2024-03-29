import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../shared/Loader';
const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`).then(res => {
            setProduct(res.data);
        })
    }, [productId]);
    const navigateToEdit = () => {

    }
    const deleteProduct = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            axios.delete(`https://api.escuelajs.co/api/v1/products/${productId}`).then(res => {
                navigate('/');
            })
        }
    }
    const { id, title, price, description, category, images = [] } = product;
    return (
        <div>
            {
                id ? <div className='flex flex-row mx-16 my-10 space-x-5'>
                    <div className='flex-2 w-2/3 text-left'>
                        <h2 className="mt-0 mb-2 text-4xl font-medium leading-tight text-primary capitalize">
                            {title}
                        </h2>
                        <p className='text-lg'><b>Category:  </b>{category?.name}</p>
                        <p className='text-lg'><b>Price:   </b>${price}</p>
                        <p className="text-lg"> <b>Description:   </b>
                            {description}
                        </p>
                        <div className='flex flex-row space-x-3'>
                            <button onClick={() => navigateToEdit(id)}
                                type="button"
                                className="inline-block rounded bg-primary my-5 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Edit Details
                            </button>
                            <button onClick={() => deleteProduct(id)}
                                type="button"
                                className="inline-block rounded bg-primary my-5 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Delete this product
                            </button>
                        </div>
                    </div>
                    <div className='flex-auto w-1/3'>
                        <img
                            className="rounded-t-lg"
                            src={images[0]}
                            alt="" />
                    </div>
                </div> : <Loader />
            }
        </div>
    );
};

export default ProductDetails;
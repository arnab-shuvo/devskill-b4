import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/not-found.jpg';
const NotFound = () => {
    return (
        <section>
            <div className='pt-32 pb-16'>
            <img src={notFound} className="max-w-xs h-auto mx-auto" alt="..." />
                <h5 className='font-bold text-dark-blue my-6'>Sorry! The page you are looking for is nowhere to find. </h5>
                <div className='mt-5'>
                <Link to='/home' type="button" data-mdb-ripple="true"
                    data-mdb-ripple-color="light" className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">Go To Home</Link>
            </div>
            </div>
        </section>
    );
};

export default NotFound;
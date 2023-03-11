import React from 'react';

const Banner = () => {
    return (
        //    banner section
        <section
            className='bg-[url("https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/portfolio_man_41920x800.png")] object-cover h-[30rem] w-full bg-cover text-gray-700'>
            <div className="max-w-7xl mx-auto py-36 px-4 sm:px-6 lg:px-8 text-left">
                <h1 className="text-xl sm:text-5xl font-semibold sm:mb-2">Keiths Williams</h1>
                <h4 className="text-sm sm:text-base uppercase tracking-[0.3rem] sm:tracking-[0.5rem]">Senior Developer</h4>
                <div className="hidden sm:flex flex-wrap my-10 space-x-6">
                    <button type="button"
                        className="flex items-center rounded border-2 border-primary bg-white px-7 pt-3 pb-2.5 font-bold leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-500 ease-in-out hover:bg-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] hover:text-white focus:bg-primary focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 focus:text-white active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init>
                        View Portifolio
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    <button type="button"
                        className="flex items-center rounded bg-primary px-7 pt-3 pb-2.5 font-bold leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-500 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init>
                        Download Resume <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
        // banner section
    );
};

export default Banner;
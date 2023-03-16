import { Typography } from '@mui/material';
import React from 'react';

const Services = () => {
    return (
        <section class="my-10 text-center">
            <Typography mt={6} variant="h3" fontWeight='bold' gutterBottom>
                My Services
            </Typography>
            <div class="flex justify-center items-center space-x-4">
                <div
                    class="flex flex-col justify-center items-center max-w-sm h-72 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:transition hover:transform hover:-translate-y-3 duration-100 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 mx-auto text-blue-600 hover:shadow-2xl">
                        <path fill-rule="evenodd"
                            d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
                            clip-rule="evenodd" />
                    </svg>
                    <div class="pt-6 px-6">
                        <h5 class="mb-2 text-xl leading-tight text-neutral-800 font-bold">
                            Web Design
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div
                    class="flex flex-col justify-center items-center max-w-sm h-72 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:transition hover:transform hover:-translate-y-3 duration-100 ease-in-out">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 mx-auto text-blue-600 hover:shadow-2xl">
                        <path
                            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path
                            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>

                    <div class="pt-6 px-6">
                        <h5 class="mb-2 text-xl leading-tight text-neutral-800 font-bold">
                            UI/UX Design
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div
                    class="flex flex-col justify-center items-center max-w-sm h-72 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:transition hover:transform hover:-translate-y-3 duration-100 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 mx-auto text-blue-600 hover:shadow-2xl">
                        <path fill-rule="evenodd"
                            d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                            clip-rule="evenodd" />
                    </svg>

                    <div class="pt-6 px-6">
                        <h5 class="mb-2 text-xl leading-tight text-neutral-800 font-bold">
                            Frontend
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
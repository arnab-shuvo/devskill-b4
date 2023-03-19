import React, { useState } from 'react';

const AddTodo = () => {
    const [todo, setTodo] = useState('');
    const handleTodo = (e) => {
        setTodo(e.target.value);
    }
    const handleAdd = () => {
        if (!todo){
            alert('Please enter a todo');
        }
        else{
            
        }
    }
    return (
        <div className="flex justify-center my-6 space-x-4">
            <div>
                <div className="relative mb-3 xl:w-96">
                    <input onChange={handleTodo}
                        type="text"
                        className="peer m-0 block h-[48px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                        id="floatingInput"
                        placeholder="Add a Todo" />
                    <label
                        htmlFor="floatingInput"
                        className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-3 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                    >Enter Todo </label>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-2 h-10 mt-1">
                <button onClick={handleAdd}
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    Add to List
                </button>
            </div>
        </div>
    );
};

export default AddTodo;
import React from 'react';

const TodoList = ({ todos, handleDelete }) => {

    return (
        <div class="flex flex-col mx-48">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-left text-sm font-medium">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">Sr No.</th>
                                    <th scope="col" class="px-6 py-4">Todo</th>
                                    <th scope="col" class="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.length > 0 ? todos.map((todo) => <tr className='border-b dark:border-neutral-500' key={todo.no}>
                                        <td class="whitespace-nowrap px-6 py-4">{todo.no}</td>
                                        <td class="whitespace-nowrap px-6 py-4">{todo.name}</td>
                                        <td class="whitespace-nowrap px-6 py-4"><button onClick={() => handleDelete(todo.no)}
                                            type="button"
                                            className="inline-block rounded bg-danger mx-2 px-2 py-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
                                            X
                                        </button></td></tr>)
                                        : <tr><td colSpan="12" className='text-center py-5' >The todo list is empty.</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TodoList;

{/* <div className='flex justify-center'>
        
<table>
    <tbody>
    {
        todos.map((todo) => <tr className='text-left py-3' key={todo.no}> 
        <td>{todo.no}.</td> <td>{todo.name}</td>   <td><button onClick={() => handleDelete(todo.no)}
            type="button"
            className="inline-block rounded bg-danger mx-2 px-2 py-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
            X
        </button></td></tr>)
    }
    </tbody>
</table>
</div> */}
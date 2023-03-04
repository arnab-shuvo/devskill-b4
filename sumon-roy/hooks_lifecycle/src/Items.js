import React from "react";
import { useEffect,useState } from "react";
const itemList =({item_List, setItemDetail})=>{
    console.log(item_List,"====")
    return (
    <>
    <button>back to home page</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {  item_List.map((item)=>(
                     <tr>
                         <td>{item.name}</td>
                         <td>{item.description}</td>
                         <td>{item.price}</td>
                         <td>{item.category}</td>
                         <td><button onClick={()=>setItemDetail(item)}>Show Details</button></td>
                    </tr>
                )) }
            </tbody>
        </table>
    </>
    );
};
export default itemList;
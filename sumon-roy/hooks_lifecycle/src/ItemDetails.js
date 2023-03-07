import React from "react";
import { useEffect,useState } from "react";
const itemDetail =({item, setItemDetail})=>{
    //console.log(item,"====")
    return (
        <>
            <button onClick={()=>setItemDetail()}>back to home page</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category  </th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                     <tr>
                         <td>{item.name}</td>
                         <td>{item.description}</td>
                         <td>{item.price}</td>
                         <td>{item.category}</td>
                    </tr>
            </tbody>
        </table>
    </>
    );
};
export default itemDetail;
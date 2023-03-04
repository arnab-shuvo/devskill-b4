import { React, useState, useEffect } from 'react';

const Home=({productList,setProdutDetails})=>{

    return(

        <>
            <table style={{ width: "100%",padding:"60px" }}>

            <tr style={{backgroundColor:"red"}}>
                <th >ID</th>
                <th >NAME</th>
                <th >PRICE</th>
                <th >CATEGORY</th>
                <th >EVENT</th>
            </tr>

            {
                productList.map((item,index) =>

                    <tr style={{ textAlign: "center" }}>

                        <td >{item.id}</td>
                        <td >{item.name}</td>
                        <td >{item.price}</td>
                        <td >{item.category}</td>
                        <button onClick={()=>setProdutDetails(item)}>Details</button>
                    </tr>

                )
            }

         </table>
        </>
    );

}

export default Home;
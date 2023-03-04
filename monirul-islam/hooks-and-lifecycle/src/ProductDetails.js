import { render } from '@testing-library/react';
import {React,useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';

function ProductDetails({productdetail,setProdutDetails}){
        
            return(
            <div style={{paddingLeft:"100px"}}>
                 <button onClick={()=>setProdutDetails(null)}>home</button>
                <p>ID:{" "}{productdetail.id}</p>
                <p>Name:{" "}{productdetail.name}</p>
                <p>Description:{" "}{productdetail.description}</p>
                <p>Price:{" "}{productdetail.price}</p>
                <p>Category:{" "}{productdetail.category}</p>
            </div>

            );
    

}
export default  ProductDetails;
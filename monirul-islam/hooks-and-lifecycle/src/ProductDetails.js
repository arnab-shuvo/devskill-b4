import { render } from '@testing-library/react';
import {React,useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';

function ProductDetails(props){
    const location=useLocation();
    const data=location.state;

return(
    
<div className='page'>

       <p>ID:{" "}{data?data.product.id:"This Product not found "}</p>
       <p>Name:{" "}{data.product.name}</p>
       <p>Description:{" "}{data.product.description}</p>
       <p>Price:{" "}{data.product.price}</p>
       <p>Category:{" "}{data.product.category}</p>
</div>

);
    

}
export default  ProductDetails;
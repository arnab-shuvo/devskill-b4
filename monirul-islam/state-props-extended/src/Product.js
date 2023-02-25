import logo from './logo.svg';
import './App.css';
import style from 'styled-components';
import { Component} from 'react';
import ProductDetails from './ProductDetails';

class Product extends Component {
  
    state  = {
    name: "",
    description: "",
    price: "",
    category: "",
    }

    ProductDetailsClick =(name,description,price,category)=>{
        const dummyState={...this.state.products};
        dummyState.name=name;
        dummyState.description=description;
        dummyState.price=price;
        dummyState.category=category;
        this.setState(dummyState);
    };
   
    render() {
        return (
            <div style={{ paddingLeft: "50px" }}>
                <h3 style={{ paddingLeft: "300px" }}>Product List</h3>
                      
               <ProductDetails ProductDetails={this.state} ProductDetailsClick={this.ProductDetailsClick} />

              </div>
             );
    }
}

export default Product;

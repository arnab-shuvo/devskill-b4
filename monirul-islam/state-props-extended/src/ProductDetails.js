import { Component } from 'react';
import { FormText } from 'react-bootstrap';
import style from 'styled-components';

class ProductDetails extends Component {
    
    state = {
        name: "PHP probook",
        description: "PHP probook for me",
        price: "40000",
        category: "laptop",
       
    };

    product1 = {
        name: "Latitude 223",
        description: "Dell new model",
        price: "80000",
        category: "laptop",
       
    };
    product2 = {
        name: "Readmi note 11 pro",
        description: "Readmi note 11 pro new",
        price: "30000",
        category: "Mobile Phone",
       
    };
    product3 = {
        name: "Shirt",
        description: "Shirt",
        price: "3000",
        category: "Cloths",
       
    };
    componentDidMount(){
        this.setState({...this.props});
    }
    render() {
        const {ProductDetails}=this.props;
        return (
            <div>
              
             <table>
                <tr>
                <td>
                    
                <input type={"text"} style={{ textAlign: "center" , color:"blue"}} value="Product Name"></input>
                <input type={"text"} style={{ textAlign: "center" , color:"blue"}}  value="Price"></input>
                
                </td>
                </tr>
               <tr>
                <td>
                <input type={"text"} value={this.state.name}></input>
                <input type={"text"} value={this.state.price}></input></td>
                <td>
                <button onClick={() => this.props.ProductDetailsClick(this.state.name,this.state.description,this.state.price,this.state.category)}>Details</button>
                </td>
                </tr>
                 <tr>
                    <td>
                <input type={"text"} value={this.product1.name}></input>
                <input type={"text"} value={this.product1.price}></input></td>
                <td>
                  <button onClick={() => this.props.ProductDetailsClick(this.product1.name,this.product1.description,this.product1.price,this.product1.category)}>Details</button>
                  </td>
                </tr>
                <tr>
                    <td>
                <input type={"text"} value={this.product2.name}></input>
                <input type={"text"} value={this.product2.price}></input></td>
                <td>
                <button onClick={() => this.props.ProductDetailsClick(this.product2.name,this.product2.description,this.product2.price,this.product2.category)}>Details</button>
                </td>
                </tr>
                <tr>
                    <td>
                <input type={"text"} value={this.product3.name}></input>
                <input type={"text"} value={this.product3.price}></input></td>
                <td>
                 <button onClick={() => this.props.ProductDetailsClick(this.product3.name,this.product3.description,this.product3.price,this.product3.category)}>Details</button>
                 </td>
                </tr> 
           
                </table>
                
                <p><b>Name: </b> {ProductDetails.name}</p>
                <p><b>Description:</b>  {ProductDetails.description}</p>
                <p><b>Price:</b> {ProductDetails.price}</p>
                <p><b>Category:</b> {ProductDetails.category}</p>
            </div>
        )
    }
}

export default ProductDetails;

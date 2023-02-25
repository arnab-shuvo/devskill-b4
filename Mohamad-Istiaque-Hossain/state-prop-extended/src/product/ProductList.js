
import { Component } from 'react';
import Mock_Products from './products.json';

class ProductList extends Component {
    state = {
        products: Mock_Products
    };
    
    render() {

        return (
            <div className="container">
                <h3><center>Display Product list </center></h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.type}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => this.props.selectProduct(product)} >Details</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );

    }
}
export default ProductList;
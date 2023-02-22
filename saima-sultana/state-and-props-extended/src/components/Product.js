import React from "react";
import ProductDetail from './ProductDetail';

class Product extends React.Component {
    state = {
        products: [
            {
                name: 'Samsung Galaxy S21 Ultra',
                description: 'The Samsung Galaxy S21 Ultra is a top-of-the-line smartphone that boasts a 6.8-inch AMOLED display with a 120Hz refresh rate. It features a powerful Snapdragon 888 processor and comes with up to 16GB of RAM, making it ideal for running demanding applications and multitasking. It also comes with a versatile camera system that includes a 108-megapixel primary sensor and a 10x hybrid zoom.',
                price: '$1,199.99',
                category: 'Smartphone',
            },
            {
                name: 'Apple AirPods Pro',
                description: 'The Apple AirPods Pro are wireless earbuds that feature active noise cancellation for immersive sound. They have a comfortable, customizable fit and come with three sizes of soft, silicone tips. They also have an adaptive EQ that automatically tunes music to the shape of your ear for a rich, consistent listening experience.',
                price: '$249.99',
                category: 'Wireless Earbuds',
            },
            {
                name: 'Sony WH-1000XM4',
                description: 'The Sony WH-1000XM4 are noise-cancelling headphones that deliver exceptional sound quality and comfort. They feature advanced noise-cancellation technology that adapts to your environment, ensuring you get the best possible listening experience. They also have touch controls, which allow you to adjust your music, take calls, and activate your voice assistant with ease.',
                price: '$349.99',
                category: 'Noise Cancelling Headphones',
            },
        ],
        clicked: 0
    }
    showDetails = (productId) => {
        this.setState({ clicked: productId })
    }
    render() {
        const { products, clicked } = this.state;
        return (
            <div className="main-div">
                {clicked === 0 && <div>
                    <h2>Product List</h2>
                    {
                        products.map((product, idx) => <div key={idx}>
                            <h3>{idx + 1}.  <b> {product.name}</b> <button className="button" onClick={() => this.showDetails(idx + 1)}> Show Details </button></h3>
                            <b>Price:</b> {product.price}
                            <span></span>
                        </div>
                        )
                    }
                </div>
                }
                {clicked !== 0 && <ProductDetail productDetails={products[clicked - 1]}></ProductDetail>}
            </div>
        );
    }
}

export default Product;
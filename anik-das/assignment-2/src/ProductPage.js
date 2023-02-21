import React from "react";

class ProductPage extends React.Component{

state  = {
    products: [
        {name: 'T-Shirt',
description: 'Cotton T-shirt for men.',
price: '450',
category: 'Clothing',
},
{
name: 'Laptop',
description: 'Core i3 Laptop of HP Brand.',
price: '55000',
category: 'Electronic Device',
},
{
name: 'Milk and Honey',
description: 'A famous book by Rupi Kaur.',
price: '350',
category: 'Book',
},
    ]
}

render(){
    return(
        <div>
            <h2>Product Page</h2>
            <h3>{this.state.products[0].name}</h3>
            <h3>{this.state.products[1].name}</h3>
            <h3>{this.state.products[2].name}</h3>
        </div>
    );
    }
}

export default ProductPage;
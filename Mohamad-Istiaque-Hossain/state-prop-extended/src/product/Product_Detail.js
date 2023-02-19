import { Component } from 'react';
import Logo from '../logo.svg'
class Product_Detail extends Component {
    state = {
        showLoader: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ ...this.state, showLoader: false });
        }, 500);
    }

    render() {
        const product = { ...this.props.info };
        return (
            <>
                {
                    this.state.showLoader ?
                    <img src={Logo} className="App-logo" alt="logo" />
                        :
                        <div>
                            <h1>{product.title}</h1>
                            Name: {product.title}<br />
                            Type: {product.type}<br />
                            Description: {product.description}<br />
                            Image: <img alt={'inage of ' + product.title} src={require('../assets/images/' + product.filename)} />
                        </div>
                }
            </>


        );
    }
}
export default Product_Detail;
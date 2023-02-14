import { Component } from 'react';
import Loader from './Loader';
import SingleInfo from './SingleInfo';

class ProductDetails extends Component {
    state = {
        showLoader: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ ...this.state, showLoader: false });
        }, 2000);
    }

    render() {
        const { name, description, price, category } = this.props.location.state;
        return (
            <>
                {this.state.showLoader ? (
                    <Loader />
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Product Details</h2>
                        <div
                            style={{
                                border: '1px solid #616161',
                                marginBottom: 15,
                                padding: 10,
                                width: 400,
                                borderRadius: 5,
                            }}
                        >
                            <SingleInfo info={{ field: 'Name', value: name }} />
                            <SingleInfo info={{ field: 'Description', value: description }} />
                            <SingleInfo info={{ field: 'Price', value: price }} />
                            <SingleInfo info={{ field: 'Category', value: category }} />
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default ProductDetails;

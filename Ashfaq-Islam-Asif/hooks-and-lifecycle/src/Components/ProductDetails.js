import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import SingleInfo from './SingleInfo';

const ProductDetails = () => {
    const location = useLocation();
    const { name, description, price, category } = location.state;

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 500);
    }, []);

    return (
        <>
            {showLoader ? (
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
                        <SingleInfo field={'Name'} value={name} />
                        <SingleInfo field={'Description'} value={description} />
                        <SingleInfo field={'Price'} value={price} />
                        <SingleInfo field={'Category'} value={category} />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;

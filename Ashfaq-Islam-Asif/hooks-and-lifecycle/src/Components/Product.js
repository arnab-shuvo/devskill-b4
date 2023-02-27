import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import SingleInfo from './SingleInfo';

const Product = () => {
    const navigate = useNavigate();

    const [products] = useState([
        {
            name: 'The Divine Reality',
            description: 'Written by Hamza Andreas Tzortzis',
            price: '3000',
            category: 'Book',
        },
        {
            name: 'iPhone 14 pro max',
            description: 'iPhone 14 pro max 256 GB (HK) Active',
            price: '225000',
            category: 'Electronic Device',
        },
        {
            name: 'T-shirt',
            description: 'Black always smile jersy T-shirt for men',
            price: '200',
            category: 'Cloth',
        },
    ]);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 1000);
    }, []);

    return (
        <>
            {showLoader ? (
                <Loader />
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>Products</h2>
                    {products.map((product) => (
                        <div
                            key={product.name}
                            style={{
                                border: '1px solid #616161',
                                marginBottom: 15,
                                padding: 10,
                                width: 400,
                                borderRadius: 5,
                            }}
                        >
                            <SingleInfo field={'Name'} value={product.name} />
                            <SingleInfo field={'Price'} value={product.price} />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <button
                                    style={{ height: 34, width: 80 }}
                                    onClick={() => {
                                        navigate('product-details', { state: product });
                                    }}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Product;

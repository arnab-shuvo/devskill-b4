import { React, useState, useEffect } from 'react';
import Home from './Home';
import ProductDetails from './ProductDetails';

const Products = [
    {
        id: "1",
        name: "Dell",
        description: "Latitude 560",
        price: '100000',
        category: "Laptop",
    },
    {
        id: "2",
        name: "HP Probook",
        description: "Brand - HP, Ram: 8GB (8x1),Ram Type - DDR4",
        price: "60000",
        category: "Laptop",
    },
    {
        id: "3",
        name: "quartz",
        description: "Quartz Hand watch",
        price: "2000",
        category: "Watch",
    },

];

function ProductList() {

    const [productList, setProductList] = useState([]);
    const [detailPage, setDetailPage] = useState(null);
    const [isLoading, SetLoading] = useState(true);

    useEffect(() => {

        setProductList(Products);
        SetLoading(false);

    }, [])
   
    useEffect(() => {
        SetLoading(true);
        setTimeout(() => {
            SetLoading(false);
        }, 2000)
    },[detailPage]);

    return (
          <>
            <div style={{ width: "100%" }}>
                {isLoading?(<>Loading...</>):(
                    <>
                    {!detailPage && (
                        <Home productList={productList} setProdutDetails={setDetailPage}/>
                    )
                    }
                    { detailPage &&
                          <ProductDetails productdetail={detailPage} setProdutDetails={setDetailPage}/>
                    }
                    </>
                    
                    )
                }
            </div>
            </>
    );
}

export default ProductList;


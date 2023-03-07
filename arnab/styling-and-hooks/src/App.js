import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

const dummyProduct = [
  {
    id: "1",
    name: "Dell",
    description: "Latitude 560",
    price: "100000",
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
function App() {
  const [productList, setProductList] = useState([]);
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProductList(dummyProduct);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [detail]);

  return (
    <>
      {isLoading ? (
        <>Loading....</>
      ) : (
        <>
          {!detail && (
            <Home productList={productList} setProductDetail={setDetail} />
          )}
          {detail && (
            <ProductDetail product={detail} setProductDetail={setDetail} />
          )}
        </>
      )}
    </>
  );
}

export default App;

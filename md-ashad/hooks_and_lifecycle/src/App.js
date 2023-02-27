import ProductPage from "./Components/Products";
import { useState } from "react";
import ProductDetails from "./Components/ProductDetails";

function App() {
  let [selectedProduct, setSelectedProduct] = useState(null);

  const setProduct = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
  };
  console.log("from app");

  return (
    <>
      {selectedProduct ? (
        <ProductDetails selectedProduct={selectedProduct} />
      ) : (
        <ProductPage setProduct={setProduct} />
      )}
    </>
  );
}
// class App extends Component {
//   state = {
//     product: null,
//   };
//   selectProduct = (product) => {
//     this.setState(product);
//   };
//   render() {
//     return (
//       <>
//         {this.state.product ? (
//           <ProductDetails
//             selectProduct={this.selectProduct}
//             product={this.state.product}
//           />
//         ) : (
//           <ProductPage selectProduct={this.selectProduct} />
//         )}
//       </>
//     );
//   }
// }

export default App;

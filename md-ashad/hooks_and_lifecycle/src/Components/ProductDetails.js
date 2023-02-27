import { useEffect, useState } from "react";
import Loader from "./Loader";

function ProductDetails({ selectedProduct }) {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    // setShowLoader(true);
    if (selectedProduct) {
      setTimeout(() => {
        setShowLoader(false);
      }, 500);
    }
    console.log("from pruductDetails useEffect");
  }, []);
  const { name, description, price, category } = selectedProduct;
  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          <ul>
            <li key={name}>
              <h2>{name}</h2>
              <p>{name}</p>
              <p>{description}</p>
              <p>{price}</p>
              <p>{category}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
// class ProductDetails extends Component {
//   state = {
//     showLoader: true,
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ ...this.state, showLoader: false });
//     }, 2000);
//   }
//   render() {
//     console.log(this.props.product);
//     const { name, description, price, category } = this.props.product.product;
//     return (
//       <>
//         {this.state.showLoader ? (
//           <Loader />
//         ) : (
//           <div>
//             <ul>
//               <li key={name}>
//                 <h2>{name}</h2>
//                 <p>{name}</p>
//                 <p>{description}</p>
//                 <p>{price}</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </>
//     );
//   }
// }

export default ProductDetails;

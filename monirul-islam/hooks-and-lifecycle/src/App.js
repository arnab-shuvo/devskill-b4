import Product from "./Product";
import ProductDetails from "./ProductDetails";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App(){

    return(
        <BrowserRouter>
        <div>
            <Link to='/Product'>Product List</Link>
            <Link to='/ProductDetails'></Link>
            <Routes>
            <Route path='/Product'  element={<Product/>} />
            <Route path='/ProductDetails'  element={<ProductDetails/>} />
                  </Routes>
       </div>
</BrowserRouter>   
    );

}

export default App;
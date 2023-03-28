import './App.css';
import Navbar from './shared/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/home' element={<Products />}></Route>
        <Route path='/createproduct' element={<CreateProduct />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

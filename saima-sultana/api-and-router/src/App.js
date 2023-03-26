import './App.css';
import Navbar from './shared/Navbar';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products/>
    </div>
  );
}

export default App;

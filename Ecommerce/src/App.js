import './App.css';
import Product from './Components/Product';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Breadcrum from './Components/Breadcrum';
import ProductListNew from './Components/ProductListNew';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Breadcrum/>
         <Routes>
            <Route path="/" element={<Product/>} />
            {/* dummy json */}
            <Route path="/product-list" element={<ProductList/>} /> 
            {/* dummy json as like from backend */}
            {/* <Route path="/product-list" element={<ProductListNew/>} />  */}
            <Route path="/product-list/:id" element={<ProductDetail/>} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

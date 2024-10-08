import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import ProtectedRouteAdmin from './pages/Admin/ProtectedRouteAdmin';
import AdminProducts from './pages/Admin/Products';
import AdminOrders from './pages/Admin/Orders';
import ProductDetailAdmin from './pages/Admin/ProductDetail';
import NewProduct from './pages/Admin/Products/new';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<Error404 />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="/admin" element={<ProtectedRouteAdmin />}>
              <Route path="products" element={<AdminProducts />} />
              <Route path="products/:product_id" element={<ProductDetailAdmin />} />
              <Route path="products/new" element={<NewProduct />} />
              <Route path="orders" element={<AdminOrders />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;

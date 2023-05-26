import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPloicy from "./pages/RefundPloicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContions from "./pages/TermAndContions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Allproducts from './components/AllProducts';
import AdminAllProductsPage from './pages/Admin/AdminAllProductsPage';

import AdminAddCategoryPage from './pages/Admin/AdminAddCategoryPage';
import AdminAddProductsPage from './pages/Admin/AdminAddProductsPage';
import Header from "./components/Header";
import UserProfile from './pages/UserProfile';
import UserEditeProfile from "./pages/UserEditeProfile";
import AdminAllOrdersPage from './pages/Admin/AdminAllOrdersPage';
import UserAllOrders from './pages/UserAllOrders';
import UserRecu from './pages/UserRecu';
import AdminEditProductsPage from "./pages/Admin/AdminEditProductsPage";
import AdminAllUsersPage from "./pages/Admin/AdminAllUsersPage";
import AdminAllCategotPage from "./pages/Admin/AdminAllCategotPage ";
import AdminAllClaimPage from "./pages/Admin/AdminAllClaimPage";
import ForgotpasswordRestCode from "./pages/ForgotpasswordRestCode ";





function App() {
  
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
        
            <Route index element={<Layout />} />
            <Route path="profile" element={<UserProfile/>} />
            <Route path="about" element={<About/>} />

            <Route path="/UserEditeProfile" element={<UserEditeProfile/>} />

            <Route path="/contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="Allproduct" element={<Allproducts />} />

            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="Rest-Code" element={<ForgotpasswordRestCode />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPloicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndContions />} />
            <Route path="/user/AllOrders"  element={<UserAllOrders/>} />
            <Route path="/user/AllRecus"  element={<UserRecu/>} />
            
            

            <Route path="/admin/EditeProduct/:id"  element={<AdminEditProductsPage/>} />
            <Route path="/admin/AllUsers"  element={<AdminAllUsersPage/>} />
            <Route path="/admin/allproducts"  element={<AdminAllProductsPage/>} />
            <Route path="/admin/allCategory"  element={<AdminAllCategotPage/>} />
            <Route path="/admin/allClaim"  element={<AdminAllClaimPage/>} />


            <Route path="/admin/addcategory"  element={<AdminAddCategoryPage/>} />
            <Route path="/admin/addproduct"  element={<AdminAddProductsPage/>} />
            <Route path="/admin/allOrders"  element={<AdminAllOrdersPage/>} />

        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

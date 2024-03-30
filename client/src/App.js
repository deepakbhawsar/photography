import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
//import { PrivateRoute } from "./components/Routes/Private";
import { AdminRoute } from "./components/Routes/Admin";
import ForgotPassword from "./pages/forgot/ForgotPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Products from "./pages/admin/Products";
import Gallery from "./pages/gallery/Gallery";
// import Galleryy from "./pages/gallery/Galleryy";
import Productdetail from "./components/Productdetail";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exect path="/" element={<Home />} />

        {/* <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Logout />} />
        </Route> */}

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
        </Route>
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/gallery-pic" element={<Galleryy/>} /> */}
        <Route path="/product" element={<Productdetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

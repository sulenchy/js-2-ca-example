import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Product from "../pages/detailPage/Product";
import Contact from "../pages/contact/Contact";
import Admin from "../pages/admin/Admin";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="products/:id" element={<Product />} />
      <Route path="contact" element={<Contact />} />
      <Route path="admin" element={<Admin />} />

      <Route path="*" element={<div>feil</div>} /> 
    </Routes>
  );
};

export default Router;

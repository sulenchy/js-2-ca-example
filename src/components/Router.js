import { Routes, Route } from "react-router-dom";
import Home from "../pages/pages/home/Home";
import Login from "../pages/pages/login/Login";
import Product from "../pages/pages/detailPage/Product";
import Contact from "../pages/pages/contact/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="products/:id" element={<Product />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<div>feil</div>} /> 
    </Routes>
  );
};

export default Router;

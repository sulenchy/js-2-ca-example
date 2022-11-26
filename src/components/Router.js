import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/detailPage/Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="product" element={<Product />} />
     {/*  <Route path="*" element={<div>feil</div>} /> */}
    </Routes>
  );
};

export default Router;

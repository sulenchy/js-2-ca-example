import { apiProducts } from "../constants/api"
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// landing page (home) displaying two item with two props.
const Featured = () => {
  useEffect(() => {
    getProducts();
}, []);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
      try {
        const response = await fetch(apiProducts);
        const data = await response.json();

        setProducts(data.data);
      } 
      catch (error) {
        console.error(error, 'error');
      }
  };

// placing it in html and creating link to detail page for products
  return (
    <div>
      <ul className="products">
      {products.map(product => (
        <div>
            <li className="product"  id={product.id}>
              <p className="productInfo">Information: {product.attributes.information} </p>
              <p className="productPrice">Price: {product.attributes.price},-</p>
            </li>
            <NavLink to= {"/products/" + product.id} data-target={product.id} className="seeMore">See More</NavLink>
            </div>
      ))}
      </ul>
    </div>
  );
};
export default Featured;




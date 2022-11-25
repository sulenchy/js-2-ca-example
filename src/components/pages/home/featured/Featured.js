import { apiProducts } from "../../../constants/api";
import fetchProducts from "../../../fetchApi";


// Why is Promise fullfilled but undefined when calling fetchProducts from fetchApi.js? 
let url = apiProducts;

const products = fetchProducts(url);

console.log(products)

function Featured () {
  // want to put the product price and information in the p tags below 
return (
  <div>
    <ul>
      <li>
        <p>Information</p> 
        <p>Price</p>
      </li>
    </ul>
  </div>
) 
  };
  
export default Featured;
import { apiProducts } from "../components/constants/api";


const url = apiProducts;

async function fetchProducts(url) {
  const response = await fetch(url);
  const data = await response.json()
  const products = data.data;
  console.log(products)

  products.forEach(product => {
    const information = product.attributes.information;
    const price = product.attributes.price;
    console.log(information + ' ' + price)
  })
}

export default fetchProducts; 



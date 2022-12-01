import { useEffect, useState } from "react";
import { apiProducts } from "../../../components/constants/api";
import { useParams } from "react-router";

const Product = () => {
  useEffect(() => {
    getProductDetail();
}, 
[]);

    const params = useParams();

  const [productDetails, setProductDetails] = useState([]);

  const getProductDetail = async () => {
      try {
        // url + fetched id 
        const response = await fetch(`${apiProducts}/${params.id}`);
        const data = await response.json();
        setProductDetails(data.data);
        console.log(data.data.attributes.information)
      } 
      catch (error) {
        console.error(error, 'error');
      } 
  };

  return (
    // why doesnt this show? 
    <div> 
       {productDetails.map(product => (
        <p>
         {product.attributes.information}
        </p>
      ))} 
     
    </div>
  )
}

export default Product;
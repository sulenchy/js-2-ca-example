import { useEffect, useState } from "react";
import { apiProducts } from "../../../components/constants/api";
import { useParams } from "react-router";

const Product = () => {
  useEffect(() => {
    getProductDetail();
}, 
// eslint-disable-next-line react-hooks/exhaustive-deps
[]);

    const params = useParams();

  const [productDetails, setProductDetails] = useState([]);

  const getProductDetail = async () => {
      try {
        // url + fetched id 
        const response = await fetch(`${apiProducts}/${params.id}`);
        const data = await response.json();
        setProductDetails(data.data);
      } 
      catch (error) {
        console.error(error, 'error');
      } 
  };

  return (
    // why doesn't this show? Correct way of calling products? 
    
    <div> 
      <p className="productDetail">
        {productDetails.attributes.information}  
       </p>
       <p className="productDetail">
        {productDetails.attributes.price}  
       </p>
    </div>
  )
}

export default Product;
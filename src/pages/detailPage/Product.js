import { useEffect, useState } from "react";
import { apiProducts } from "../../components/constants/api";
import { useParams } from "react-router";
import Introduction from "../../components/Introduction";

const Product = () => {
  useEffect(() => {
    getProductDetail();
}, 
// eslint-disable-next-line react-hooks/exhaustive-deps
[]);

    const params = useParams();

  const [productDetails, setProductDetails] = useState();

  const getProductDetail = async () => {
      try {
        // url + fetched id 
        const response = await fetch(`${apiProducts}/${params.id}`);
        const data = await response.json();
        setProductDetails(data.data);
        console.log(data.data)
      } 
      catch (error) {
        console.error(error, 'error');
      } 
  };


  
    // loading product. 
    if (!productDetails) {
      return <div>Loading...</div>
    }
    // if product is sold out
    if(productDetails.attributes.soldOut === true) {
      return <p>This item is unfortunately sold out.</p>
    }
    // else return as normal 
    return (
      <>
        <Introduction name = {productDetails.attributes.title} />
        <p>
          <span className="break">Paper quality and size: </span>
          {productDetails.attributes.information}
        </p>

        <p>
          <span className="break">Price:</span> 
          {productDetails.attributes.price},-
        </p>
      </>
    )
}

export default Product;
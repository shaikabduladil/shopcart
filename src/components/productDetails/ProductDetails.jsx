import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context";
import './productDetails.css';


const ProductDetails = (props) => {
  const [currentProduct, setCurrentProduct] = useState();
  const data = useContext(AppContext);
  console.log(data,"data");
  const { products } = data;
  const params = useParams();
  const productId = params?.id;

  //filtering the current product
  useEffect(() => {
    const extractedProduct = products?.filter((product) => {
      return product.id == productId;
    });
    setCurrentProduct(extractedProduct);
  }, [productId]);
  const onAddTocartClick = (newProduct)=>{
    console.log(newProduct?.[0],"newProduct");
    const existingCartProducts = JSON.parse(localStorage.getItem("cartItems"));
    if(existingCartProducts&&existingCartProducts.length>0){
      existingCartProducts.push(newProduct?.[0]);
      localStorage.setItem("cartItems",JSON.stringify(existingCartProducts))
    }else{
      localStorage.setItem("cartItems",JSON.stringify(newProduct?.[0]))
    }
  }

  return (
    <section id="productDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
          <div className="details-image-container">
            <img src={currentProduct?.[0].images[0]}/>
          </div>
          </div>
          </div>
          <div className="row mt-4">
          <div className="col-md-6 divider">
            <div className="details-title-container">
            <h2>{currentProduct?.[0].title}</h2>
            <p>price</p>
            <h3>${currentProduct?.[0].price}.00</h3>
            </div>
            <div className="buttons-container">
              <button onClick={()=>onAddTocartClick(currentProduct)}>Add to Cart</button>
              <button>Buy now</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="details-description-container">
            <h3>Description</h3>
            <p>{currentProduct?.[0].description}</p>
            </div>
          </div>
          </div>
        
      </div>
    </section>
  );
};

export default ProductDetails;

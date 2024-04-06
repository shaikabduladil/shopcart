import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context";

const ProductDetails = (props) => {
  const [currentProduct, setCurrentProduct] = useState();
  const[activeIndex,setActiveIndex] = useState(0);
  const data = useContext(AppContext);
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

//   useEffect(()=>{
//     const indexInterval = setInterval(()=>{
//         const newIndex = (activeIndex + 1) % currentProduct?.[0].images?.length;
//         setActiveIndex(newIndex)
//     },2000)
//     // return clearInterval(indexInterval)
//   },[activeIndex,currentProduct])

  const nextSlide = ()=>{
    const nexIndex = (activeIndex+1) % currentProduct?.[0].images.length;
    setActiveIndex(nexIndex)
  }
  const prevSlide = ()=>{
    const nexIndex = (activeIndex-1) % currentProduct?.[0].images.length;
    setActiveIndex(nexIndex)
  }
  return (
    <section id="productDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {currentProduct?.[0].images?.map(
              (productImage, index) => {
                return (
                  <div key={index}>
                    <div
                      id="carouselExampleAutoplaying"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className={`carousel-item ${index === activeIndex?"active":""}`}>
                          <img
                            src={productImage}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev"
                        onClick={nextSlide}
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next"
                        onClick={prevSlide}
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                );
              }
            )}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

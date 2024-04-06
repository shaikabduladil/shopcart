import React, { useContext, useState } from "react";
import { AppContext } from "../../Context";
import placeholderImage from "../../assets/images/placeholder.jpg";
import "./home.css";
import { Link } from "react-router-dom";
import Login from "../login/Login";

const Home = (props) => {
  const data = useContext(AppContext);
  const { products } = data;
  let cartProducts = [];

  const onAddTocartClick = (newProduct) => {
    cartProducts.push(newProduct);
    localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  };

  return (
    <>
      {props?.showHome ? (
        <section id="home-products">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {products?.map((product, index) => (
                <div className="col product-card" key={index}>
                  <div className="card h-100">
                    <Link to={`/product-details/${product.id}`}>
                      <img
                        src={
                          product?.images[0]?.[0].includes("[")
                            ? placeholderImage
                            : product?.images[0]
                        }
                        className="card-img-top"
                        alt={product?.title}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product?.title}</h5>
                      <div className="card-body-footer d-flex">
                        <p className="card-text">${product?.price}.00</p>
                        <button onClick={() => onAddTocartClick(product)}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <Login showHome={props?.showHome} setShowHome={props?.setShowHome} />
      )}
    </>
  );
};

export default Home;

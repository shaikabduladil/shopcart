import React, { useContext, useState } from "react";
import { AppContext } from "../../Context";
import placeholderImage from "../../assets/images/placeholder.jpg";
import "./home.css";
import { Link ,Navigate, useNavigate} from "react-router-dom";
import Login from "../login/Login";
import Loaderr from "../Loader/Loaderr";
import NoProductFound from "../noProductFound/NoProductFound";
import Slider from "../slider/Slider";

const Home = (props) => {
  const navigate = useNavigate();
  const data = useContext(AppContext);
  const { products,isLoading,setIsLoading } = data;
  let cartProducts = [];
  const[addedToCartIds,setAddedToCartIds] = useState(()=>{
    const storedItems = JSON.parse(localStorage.getItem("cartItems"))||[]
    return storedItems?.map((item)=>item.id);
  })

  const onAddTocartClick = (newProduct) => {
    const existingCartProducts = JSON.parse(localStorage.getItem("cartItems"));
    if(existingCartProducts&&existingCartProducts.length>0){
      existingCartProducts.push(newProduct);
      localStorage.setItem("cartItems",JSON.stringify(existingCartProducts))
    }else{
      cartProducts.push(newProduct);
      localStorage.setItem("cartItems", JSON.stringify(cartProducts));
    }
    setAddedToCartIds([...addedToCartIds,newProduct.id])
  };

  return (
    <>
    {isLoading?<Loaderr/>:<>
      {props?.showHome ? (
        <section id="home-products">
          <Slider/>
          <div className="container">
              {products?.length>0? <>
            <div className="row row-cols-2 row-cols-md-4 g-4">
              {
              products?.map((product, index) => (
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
                        <button 
                        onClick={() =>addedToCartIds?.includes(product.id)?navigate("/cart"): onAddTocartClick(product)}>
                         {addedToCartIds?.includes(product.id)?"Go to Cart": "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
                </div>
              </>
              :<>
              <NoProductFound/>
              </>}
          </div>
        </section>
      ) : (
        <Login showHome={props?.showHome} setShowHome={props?.setShowHome} />
      )}
    </>}
    
    </>

  );
};

export default Home;

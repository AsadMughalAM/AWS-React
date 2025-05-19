import React, { useState } from "react";
import { categories} from "../../assets/categories";
import bg from "../../assets/bg0.gif";
import Product from "../../components/product/Product";
import { dummydata } from "../../assets/dummydata";
import "./Home.css";

const Home = () => {
  const [cate,setCate]=useState(dummydata)
  function filterProducts(categories){
    const updatedProducts=dummydata.filter((item)=>(
    item.category===categories
    ))
    setCate(updatedProducts)
  }
  return (
    <>
      <div className="hero-bg">
        <img src={bg} />
      </div>

      <div className="category-section">
        {categories.slice(0,5).map((item,index) => {
          return <div className="category-card"key={index} onClick={()=>(filterProducts(item.name))}>
             <img src={item.img}  />
             <span >{item.name} </span>
          </div>
        })}
      </div>
      <div className="trending">
      <h1>Trending Products</h1>
      </div>
     <div className="product-section">
  {cate.slice(0,5).map((item, index) => (
    <Product key={index} data={item} />
  ))}
</div>

    </>
  );
};

export default Home;

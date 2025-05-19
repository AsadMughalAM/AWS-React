import React,{useState} from 'react'
import { categories } from '../../assets/categories'
import { dummydata } from '../../assets/dummydata'
import Product from '../../components/product/Product'
import { FaShopify } from "react-icons/fa";
import './Shop.css'
const Shop = () => {
     const [cate,setCate]=useState(dummydata)
     function filterProducts(categories){
        if(categories==="All"){
            setCate(dummydata)
        }
         else
         {const updatedProducts=dummydata.filter((item)=>(
         item.category===categories
         ))
         setCate(updatedProducts)
       }}
  return (
   <>
   <div className='shop'>
    <div className="trending">
      <h1>Shop</h1>
       <FaShopify className='logo'/>
      </div>
      <div className="category-section">
            {categories.map((item,index) => {
              return <div className="category-card" key={index} onClick={()=>(filterProducts(item.name))}>
                 <img src={item.img}  />
                 <span>{item.name}</span>
              </div>
            })}
          </div>
           <div className="product-section">
  {cate.map((item, index) => (
    <Product key={index} data={item} />
  ))}
</div>
   </div>
   </>
  )
}

export default Shop
import React from "react";
import { FaShopify } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
const Navbar = () => {
  let items = useSelector((state) => state);
  return (
    <>
      <div className="nav">
        <div className="topNav">
          <Link to={"./"}>
            <div className="logo">
              <span>TortoCraft</span>
              <FaShopify />
            </div>
          </Link>
          <form className="search-box">
            <input type="text" placeholder="Search items.." />
            <button>
              <IoSearchOutline />
            </button>
          </form>
         <Link to={'./cart'}><div className="cart-box">
            <IoCartOutline />
            <span>{items.cart.length}</span>
          </div>
          </Link>
        </div>
        <div className="bottomNav">
          <Link to={"./"}>
            <li>Home</li>
          </Link>
          <Link to={"/shop"}>
            <li>Shop</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

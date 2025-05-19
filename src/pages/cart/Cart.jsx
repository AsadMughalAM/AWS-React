import React from "react";
import CartCard from "../../components/cartCard/CartCard";
import { useSelector } from "react-redux";
import ec from "../../assets/emptycart.png";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  
  // Calculate subtotal (sum of all items' price * quantity)
  const subtotal = cart.reduce((sum, item) => sum + (item.data.price * (item.data.quantity || 1)), 0);
  
  // Calculate shipping (free for orders over Rs 2000, otherwise Rs 150)
  const shippingPrice = subtotal > 20000 ? 0 : 1500;
  
  // Calculate total (subtotal + shipping)
  const total = subtotal + shippingPrice;

  return (
    <div className="cart">
      {cart.length <= 0 ? (
        <div className="empty-cart">
          <img src={ec} alt="Empty cart" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartCard 
                key={item.data.id} 
                item={item} 
              />
            ))}
          </div>
          
         
          <Link to={'./checkout'}><button className="checkout-btn">Proceed to Checkout</button></Link>
        </>
      )}
    </div>
  );
};

export default Cart;
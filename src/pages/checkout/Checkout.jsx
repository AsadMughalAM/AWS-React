import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cart } = useSelector((state) => state);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate order totals
  const subtotal = cart.reduce((sum, item) => sum + (item.data.price * (item.data.quantity || 1)), 0);
  const shippingPrice = subtotal > 20000 ? 0 : 1500;
  const total = subtotal + shippingPrice;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    // Here you would typically send the order to your backend
  };

  if (orderPlaced) {
    return (
      <div className="order-confirmation">
        <div className="confirmation-box">
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your purchase.</p>
          <p>Your order has been confirmed and will be processed shortly.</p>
          <Link to="/" className="back-to-home">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="receipt-container">
        <h1>Order Receipt</h1>
        
        <div className="receipt-items">
          {cart.map((item) => (
            <div key={item.data.id} className="receipt-item">
              <div className="item-info">
                <h4>{item.data.name}</h4>
                <p>Qty: {item.data.quantity || 1}</p>
              </div>
              <div className="item-price">
                Rs {(item.data.price * (item.data.quantity || 1)).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="receipt-totals">
          <div className="total-row">
            <span>Subtotal:</span>
            <span>Rs {subtotal.toFixed(2)}</span>
          </div>
          <div className="total-row">
            <span>Shipping:</span>
            <span>{shippingPrice === 0 ? 'FREE' : `Rs ${shippingPrice.toFixed(2)}`}</span>
          </div>
          <div className="total-row grand-total">
            <span>Total:</span>
            <span>Rs {total.toFixed(2)}</span>
          </div>
        </div>

        <button onClick={handlePlaceOrder} className="place-order-btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
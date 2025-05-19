import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CartCard.css';

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(RemoveItem(item.data.id));
    toast.success(`${item.data.name} removed from cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className='Cartcard'>
      <div className='left-cart'>
        <img src={item.data.image} alt={item.data.name} />
        <div className='info'>
          <span className='product-name'>{item.data.name}</span>
          <span className='product-price'>Rs {item.data.price}/-</span>
        </div>
      </div>
      <div className='right-cart'>
        <button onClick={handleRemove}>
          <RiDeleteBin6Line /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
import React from 'react';
import './Product.css';
import { useDispatch } from 'react-redux'; 
import { AddItem } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ data }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(AddItem({ data }));
        toast.success(`${data.name} added to cart!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="product">
            <img src={data.image} alt={data.name} />
            <div className="product-details">
                <span className="product-name">{data.name}</span>
                <span className="product-price">Rs {data.price}</span>
                <button className="product-button" onClick={handleAddToCart}>
                    Add +
                </button>
            </div>
        </div>
    );
};

export default Product;
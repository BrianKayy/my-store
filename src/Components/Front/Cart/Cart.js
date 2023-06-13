import React from "react";

const Cart = ({ cartItems }) => {
  return (
        <div className="cart-items">
            <div className="cart-items-header">Cart Items</div>

            { cartItems.length === 0 && (
              <div className="cart-items-header"> No items are added. </div>
            )}

            <div>
              {cartItems.map((item) =>(    
                <div key={item.id} className="cart-items-list">
                  <img
                   src= {item.image} 
                   alt={item.name} />
                </div>
              ))}
            </div>
        </div> 
  );
};

export default Cart;
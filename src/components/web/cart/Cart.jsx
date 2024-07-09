import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
const Cart = () => {

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
    
    <div className="clas-cart d-flex align-items-center" onClick={toggleCart}>
      <div className="cart-number">
        <div className="number d-flex justify-content-center align-items-center">
          <span className="text-white ">2</span>
        </div>
      </div>
      <FaShoppingCart className="icon-cart fs-5" />
    </div>
      {showCart && (
        <div className="cart-list bg-white d-flex flex-column p-2 position-absolute mt-5">
          {/* tombol close cart */}
          <button className="btn-close" onClick={toggleCart}></button>
          <h5 className="text-center mt-4">daftar belanja</h5>
          <p className="text-center mt-3 text-secondary">anda belum membeli</p>
          <hr />
          <div className="total-cart d-flex justify-content-between">
            <h5>Total :</h5> 
            <h5 className="fw-bold">Rp. 200.000</h5>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

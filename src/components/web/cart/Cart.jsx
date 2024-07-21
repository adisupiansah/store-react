import { FaShoppingCart } from "react-icons/fa";
import { useState, useContext } from "react";
import { CartContext } from "../../../provider/context/CartProvider";
import { Rupiah } from "../../../utils/FormatRP/Rupiah"
const Cart = () => {

  const [showCart, setShowCart] = useState(false);
  const {cartItems} = useContext(CartContext);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.harga, 0);
  console.log(cartItems)

  const getImage = (image) => {
    try {
      return new URL(`../../../assets/img/${image}`, import.meta.url).href;
    } catch (error) {
        return new URL (`../../../assets/img/default.png`);
    }
  }

  return (
    <>
    
    <div className="clas-cart d-flex align-items-center" onClick={toggleCart}>
      <div className="cart-number">
        <div className="number d-flex justify-content-center align-items-center">
          <span className="text-white ">{cartItems.length}</span>
        </div>
      </div>
      <FaShoppingCart className="icon-cart fs-5" />
    </div>
      {showCart && (
        <div className="cart-list bg-white d-flex flex-column p-2 position-absolute mt-5">
          {/* tombol close cart */}
          <button className="btn-close" onClick={toggleCart}></button>
          <h5 className="text-center mt-4">daftar belanja</h5>
          {cartItems.length === 0 ? (
            <p className="text-center mt-3 text-secondary ">KERANJANG ANDA KOSONG</p>
            
          ) : (
            cartItems.map((item) => (
              <div className="d-flex justify-content-between mt-3" key={item.id}>
                <img src={getImage(item.image)} alt="" className="rounded-1 mx-2" width={50}/>
                <span>{item.type} - size: {item.size}</span>
                <p>Rp. {Rupiah(item.harga)}</p>
              </div>
            ))
          )}
          <hr />
          <div className="total-cart d-flex justify-content-between">
            <h5>Total :</h5> 
            <h5 className="fw-bold">Rp {Rupiah(totalAmount)}</h5>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

import React, { FC, useState } from 'react';
import logoImg from '../../assets/images/vercel.svg';
import cartImg from '../../assets/images/bx-cart.svg';
import './Header.css';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart/actions';


const Header: FC = () => {
  const cart = useTypeSelector(state => state.cart);
  const[isCartShow, setIsCartShow] = useState(true);

  const dispatch = useDispatch();

  const removeHandler = (id: string) => {
    dispatch(removeFromCart(id))
  };

  const total: number = cart.reduce((acc, item) => acc + item.price * item.count, 0)

  return (
    <div className="header-wrap">
      <div className="header-logo-wrap">
        <img src={logoImg} alt="logo" />
      </div>
      <button
        onClick={() => {
          setIsCartShow(!isCartShow);
        }}
        className="cartBtn"
      >
        <img src={cartImg} />
        <div className="cart-length">{cart.length}</div>
      </button>
      <div className={isCartShow ? "hidden" : "active-cart"}>
        {cart.map((item) => (
          <div key={`cart item ${item.name}`} className="cart-items">
            <div className="cart-name">{item.name}</div>
            <div className="cart-img">
              <img src={item.imagePath} alt={item.name} />
            </div>
            <div className="cart-count">{`${item.price}$ x ${item.count}`}</div>
            <button
              onClick={() => removeHandler(item._id)}>
              <a
                href="#_"
                className="relative left-2 bottom-2.5 px-4 py-1 font-semibold text-white group">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                <span className="relative">Удалить</span>
              </a>
            </button>
          </div>
        ))}
        <div
          className={isCartShow || cart.length == 0 ? "hidden" : "total-cart"}
        >
          Итого: {total}$
        </div>
      </div>
    </div>
  );
};

export default Header;
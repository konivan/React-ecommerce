import React, { FC, useState } from 'react';
import logoImg from '../../assets/images/vercel.svg';
import cartImg from '../../assets/images/bx-cart.svg';
import './Header.css';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { removeFromCart, searchContent } from '../../store/cart/actions';


const Header: FC = () => {
  const cart = useTypeSelector(state => state.cart);
  const content = useTypeSelector(state => state.content);
  const[isCartShow, setIsCartShow] = useState(true);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const removeHandler = (id: string) => {
    dispatch(removeFromCart(id))
  };

  const searchHandler = (value: string) => {
    dispatch(searchContent(value))
  };

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  const total: number = cart.reduce((acc, item) => acc + item.price * item.count, 0)

  return (
    <div className="header-wrap">
      <div className="header-logo-wrap">
        <img src={logoImg} alt="logo" />
      </div>
      <div className={isCartShow ? "model-input-wrapper-r" : 'model-input-wrapper-a'}>
        <input className="model-input" value={value} onChange={handleChange} placeholder="Поиск по модели"></input>
        <button className="input-btn" onClick={() => searchHandler(value)}>
          <a
            href="#_"
            className="relative bg-purple-600 font-bold ml-2 h-9 inline-flex items-center justify-center px-2 overflow-hidden text-indigo-600 transition duration-300 ease-out border-2 border-purple-600 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-600 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Поиск
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
        </button>
      </div>
      <button
        onClick={() => {setIsCartShow(!isCartShow)}} className="cartBtn">
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
            <button onClick={() => removeHandler(item._id)}>
              <a
                href="#_"
                className="relative left-2 bottom-2.5 px-4 py-1 font-semibold text-white group"
              >
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
          className={isCartShow || cart.length === 0 ? "hidden" : "total-cart"}>
          Итого: {total}$
        </div>
      </div>
    </div>
  );
};

export default Header;
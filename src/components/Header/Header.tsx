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

  const total:number = cart.reduce((acc, item) => acc + item.price * item.count, 0)

  return (
    <div className='header-wrap'>
      <div className='header-logo-wrap'>
        <img src={logoImg} alt="logo"/>
      </div>
      <button onClick={() => {setIsCartShow(!isCartShow)}} className='cartBtn'>
        <img src={cartImg}/>
        <div className='cart-length'>{cart.length}</div>
      </button>
      <div className={isCartShow ? "hidden" : "active-cart"}>
        {cart.map((item) => (
          <div key={`cart item ${item.name}`} className="cart-items">
            <div className="cart-name">{item.name}</div>
            <div className="cart-img">
              <img
                src={item.imagePath}
                alt={item.name}/>
            </div>
            <div className='cart-count'>{`${item.price}$ x ${item.count}`}</div>
            <button onClick={() => removeHandler(item._id)} className='cart-delete-btn'>Удалить</button>
          </div>
        ))}
        <div className={isCartShow ? "hidden" : 'total-cart'}>{total}</div>
      </div>
    </div>
  );
};

export default Header;
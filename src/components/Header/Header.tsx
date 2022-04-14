import React, { FC, useState } from 'react';
import logoImg from '../../assets/images/vercel.svg';
import cartImg from '../../assets/images/bx-cart.svg';
import { CartItem } from '../../types';
import './Header.css';

const cartItem: CartItem[] = [
  {
    name: "Apple M1 Pro 10",
    imagePath: "https://items.s1.citilink.ru/1624466_v01_b.jpg",
    price: 4200,
    count: 1,
  },
  {
    name: "DELL Latitude 9420",
    imagePath: "https://items.s1.citilink.ru/1653707_v01_b.jpg",
    price: 4800,
    count: 1,
  },
  {
    name: "Acer Predator Helios 300",
    imagePath: "https://items.s1.citilink.ru/1547104_v01_b.jpg",
    price: 2900,
    count: 1,
  },
];

const Header: FC = () => {
  const[isCartShow, setIsCartShow] = useState(true);
  const total:number = cartItem.reduce((acc, item) => acc + item.count, 0)

  return (
    <div className='header-wrap'>
      <div className='header-logo-wrap'>
        <img src={logoImg} alt="logo"/>
      </div>
      <button onClick={() => {setIsCartShow(!isCartShow)}} className='cartBtn'>
        <img src={cartImg}/>
      </button>
      <div className={isCartShow ? "hidden" : "active-cart"}>
        {cartItem.map((item) => (
          <div key={`cart item ${item.name}`} className="cart-items">
            <div className="cart-name">{item.name}</div>
            <div className="cart-img">
              <img
                src={item.imagePath}
                alt={item.name}/>
            </div>
            <div className='cart-count'>{`${item.price}$ x ${item.count}`}</div>
            <button className='cart-delete-btn'>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
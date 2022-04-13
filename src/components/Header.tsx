import React, { FC, useState } from 'react';
import logoImg from '../assets/images/logo.svg';
import cartImg from '../assets/images/bxs-cart.svg';
import { CartItem } from '../types';

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
    <div className="flex items-center justify-between bg-emerald-700">
      <div>
        <img src={logoImg} alt="logo" width="200" height="100" />
      </div>
      <button onClick={() => {setIsCartShow(!isCartShow)}} className='absolute right-0'>
        <img src={cartImg} />
      </button>
      <div className={isCartShow ? "hidden" : "flex items-center"}>
        {cartItem.map((item) => (
          <div key={`cart item ${item.name}`}>
            <div className="mr-1">{item.name}</div>
            <div className="mr-1">
              <img
                src={item.imagePath}
                alt={item.name}
                width="55" height="55"/>
            </div>
            <div>{`${item.price} x ${item.count}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
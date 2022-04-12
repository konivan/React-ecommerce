import React, { FC } from 'react';
import logoImg from '../assets/images/logo.svg';
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
  return (
    <div className='flex items-center content-between'>
      <div>
        <img src={logoImg} alt="logo" width="95" height="85" />
      </div>
      {cartItem.map((item) => (
        <div className="flex items-center">
          <div className='mr-1'>{item.name}</div>
          <div className="mr-1">
            <img src={item.imagePath} alt={item.name} width="55" height="55" />
          </div>
          <div>{item.price}</div>
          <div className='mr-5 ml-1'>{item.count}</div>
        </div>
      ))}
    </div>
  );
};

export default Header;
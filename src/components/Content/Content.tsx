import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { sortItemsByPrice, sortItemsByPriceLower } from '../../store/cart/actions';
import { CartItem } from '../../store/cart/types';
import CardItem from './CardItem/CardItem';
import './Content.css'

const Content:FC = () => {
  const content = useTypeSelector(state => state.content);
  const dispatch = useDispatch();
  const sortPriceHandler = (content: CartItem[]) => {
    dispatch(sortItemsByPrice(content))
    setA(1);
  }
  const sortLowerPriceHandler = (content: CartItem[]) => {
    dispatch(sortItemsByPriceLower(content))
    setA(2);
  }

  const [a, setA] = useState(0)

  return (
    <>
      <div className="content-wrap">
        <div className="sort-btn-wrapper">
          <button onClick={() => sortPriceHandler(content)}>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">По убыванию</span>
            </a>
          </button>
          <button onClick={() => sortLowerPriceHandler(content)}>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white ">По возрастанию</span>
            </a>
          </button>
        </div>
        {content.map((item) => (
          <CardItem item={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default Content;
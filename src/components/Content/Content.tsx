import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { sortItemsByName, sortItemsByPrice } from '../../store/cart/actions';
import { CartItem } from '../../store/cart/types';
import CardItem from './CardItem/CardItem';
import './Content.css'

const Content:FC = () => {
  const content = useTypeSelector(state => state.content);
  const dispatch = useDispatch();
  const sortPriceHandler = (cart: CartItem[]) => {
    dispatch(sortItemsByPrice(cart))
  }
  const sortNameHandler = () => {
    dispatch(sortItemsByName(content))
  }

  return (
    <>
      <div className="content-wrap">
        <div className="sort-btn-wrapper">
          <button onClick={() => sortPriceHandler(content)} className="price-btn">По цене</button>
          <button onClick={sortNameHandler} className="name-btn">По названию</button>
        </div>
        {content.map((item) => (
          <CardItem item={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default Content;
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../../store/cart/actions';
import { CartItem } from '../../../store/cart/types';
import './CardItem.css';
import ItemCount from './ItemCount/ItemCount';

interface Props {
  item: CartItem,
}

const CardItem:FC<Props> = ({item}) => {

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addToCart(item, count))
    setCount(0);
  }

  return (
    <div className="item-wrap">
      <NavLink to={`/product/${item._id}`}>
      <img src={item.imagePath} alt={item.name} />
      </NavLink>
      <div className="text-wrap">
        <div className="item-name">{item.name}</div>
        <div className='item-desc-wrap'>
          <div className='item-category font-serif'>
            <div className='item-cat'><span className='font-bold'>Диск:</span> <span className='desc ml-1'>{item.description.disk}</span></div>
            <div className='item-cat'><span className='font-bold'>Экран:</span> <span className='desc ml-1'>{item.description.screen}</span></div>
            <div className='item-cat'><span className='font-bold'>CPU:</span> <span className='desc ml-1'>{item.description.CPU}</span></div>
            <div className='item-cat'><span className='font-bold'>RAM:</span> <span className='desc ml-1'>{item.description.RAM}</span></div>
            <div className='item-cat'><span className='font-bold'>OS:</span> <span className='desc ml-1'>{item.description.OS}</span></div>
          </div>
        </div>
        <div className="item-price">{item.price}$</div>
        <button onClick={addHandler} className='item-btn'>
          <a
            href="#_"
            className="px-3.5 py-1.5 mb-0.5 relative rounded group text-white font-semibold inline-block">
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">В корзину</span>
          </a>
        </button>
        <ItemCount count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default CardItem;
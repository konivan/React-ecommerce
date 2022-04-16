import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
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
    dispatch(addToCart(item , count))
  }

  return (
    <div className="item-wrap">
      <img src={item.imagePath} alt={item.name} />
      <div className='text-wrap'>
        <div className="item-name">{item.name}</div>
        <div className="item-price">{item.price}$</div>
        <button onClick={addHandler} className="item-btn">В корзину</button>
        <ItemCount count={count} setCount={setCount}/>
      </div>
    </div>
  );
};

export default CardItem;
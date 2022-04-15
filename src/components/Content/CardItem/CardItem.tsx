import React, { FC } from 'react';
import { ContentItem } from '../../../store/cart/types';
import './CardItem.css';
import ItemCount from './ItemCount/ItemCount';

interface Props {
  item: ContentItem,
}

const CardItem:FC<Props> = ({item}) => {
  return (
    <div className="item-wrap">
      <img src={item.imagePath} alt={item.name} />
      <div className='text-wrap'>
        <div className="item-name">{item.name}</div>
        <div className="item-price">{item.price}$</div>
        <button className="item-btn">В корзину</button>
        <ItemCount />
      </div>
    </div>
  );
};

export default CardItem;
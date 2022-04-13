import React, { FC } from 'react';
import { ContentItem } from '../../types';

interface Props {
  item: ContentItem,
}

const CardItem:FC<Props> = ({item}) => {
  return (
    <div className='item-wrap'>
      <img src={item.imagePath} alt={item.name} className='item-image'/>
      <div className='item-name'>{item.name}</div>
      <div className='item-price'>{item.price}</div>
      <button className='item-btn'>В корзину</button>
    </div>
  );
};

export default CardItem;
import React, { FC } from 'react';
import { ContentItem } from '../../types';
import CardItem from '../CardItem/CardItem';
import './Content.css'

const contentItem: ContentItem[] = [
  {
    name: "Apple M1 Pro 10",
    imagePath: "https://items.s1.citilink.ru/1624466_v01_b.jpg",
    price: 4200,
  },
  {
    name: "DELL Latitude 9420",
    imagePath: "https://items.s1.citilink.ru/1653707_v01_b.jpg",
    price: 4800,
  },
  {
    name: "Acer Predator Helios 300",
    imagePath: "https://items.s1.citilink.ru/1547104_v01_b.jpg",
    price: 2900,
  },
];

const Content:FC = () => {
  return (
    <div className='content-wrap'>
      {contentItem.map(item => <CardItem item={item}/>)}
    </div>
  );
};

export default Content;
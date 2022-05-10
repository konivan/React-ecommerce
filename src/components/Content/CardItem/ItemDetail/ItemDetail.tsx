import React from 'react';
import { useParams } from 'react-router-dom';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import './ItemDetail.css';

const ItemDetail = () => {
  const { item_id } = useParams();
  const content = useTypeSelector(state => state.content);
  const selectItem = content.filter(el => el._id === item_id);

  return (
    <>
      <div className='selectItem-wrap'>
        <div className='selectItem-content'>
        <div className='selectItem-name'>{selectItem[0].name}</div>
          <div className='selectItem-img-wrap'>
            <img src={selectItem[0].imagePath} alt={selectItem[0].name}/>
          </div>
          <div className='selectItem-desc-wrap'>
            <div className='font-bold'>Характеристики ноутбука:</div>
            <div>
              <div><span className='font-bold'>Диск:</span> <span className='ml-1'>{selectItem[0].description.disk}</span></div>
              <div><span className='font-bold'>Экран:</span> <span className='ml-1'>{selectItem[0].description.screen}</span></div>
              <div><span className='font-bold'>CPU:</span> <span className='ml-1'>{selectItem[0].description.CPU}</span></div>
              <div><span className='font-bold'>RAM:</span> <span className='ml-1'>{selectItem[0].description.RAM}</span></div>
              <div><span className='font-bold'>OS:</span> <span className='ml-1'>{selectItem[0].description.OS}</span></div>
            </div>
          </div>
          <div className='selectItem-price-wrap'>
          <div className='selectItem-price'>{selectItem[0].price}$</div>
          <button className='selectItem-btn'>
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
        </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
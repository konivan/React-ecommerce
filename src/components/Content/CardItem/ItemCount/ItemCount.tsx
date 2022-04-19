import React, { FC } from 'react';
import { TypeSetState } from '../../../../store/cart/types';
import './ItemCount.css';
import plusImg from '../../../../assets/images/bx-plus-circle.svg';
import minusImg from '../../../../assets/images/bx-minus-circle.svg';

interface Count {
  count: number,
  setCount: TypeSetState<number>
}

const ItemCount: FC<Count> = ({count, setCount}) => {

  return (
    <div className='input-wrapper'>
      <button onClick={() => setCount((count) => count += 1)} className={'plus-btn'}>
        <img src={plusImg} alt='plus' />
      </button>
      <input value={count} onChange={e => setCount(+e.target.value)} className='num-input'></input>
      <button onClick={count >= 1 ? () => setCount((count) => count -= 1): () => setCount((count) => count -= 0)} className='plus-btn'>
        <img src={minusImg} alt='minus' />
      </button>
    </div>
  );
};

export default ItemCount;
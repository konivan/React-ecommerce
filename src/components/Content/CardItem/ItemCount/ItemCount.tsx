import React, { FC, useState } from 'react';
import { TypeSetState } from '../../../../store/cart/types';

interface Count {
  count: number,
  setCount: TypeSetState<number>
}

const ItemCount: FC<Count> = ({count, setCount}) => {

  return (
    <div>
      <button onClick={() => setCount((count) => count += 1)}>+</button>
      <input value={count} onChange={e => setCount(+e.target.value)}></input>
      <button onClick={count >= 1 ? () => setCount((count) => count -= 1): () => setCount((count) => count -= 0)}>-</button>
    </div>
  );
};

export default ItemCount;
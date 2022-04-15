import React, { useState } from 'react';

const ItemCount = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count += 1)}>+</button>
      <input value={count} onChange={e => setCount(+e.target.value)}></input>
      <button onClick={count == 1 ? () => setCount((count) => count -= 1): () => setCount((count) => count -= 0)}>-</button>
    </div>
  );
};

export default ItemCount;
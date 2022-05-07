import React from 'react';
import { useParams } from 'react-router-dom';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';

const ItemDetail = () => {
  const { product } = useParams();
  const content = useTypeSelector(state => state.content);

  return (
    <div>
      <button onClick={() => console.log(product)}>click</button>
    </div>
  );
};

export default ItemDetail;
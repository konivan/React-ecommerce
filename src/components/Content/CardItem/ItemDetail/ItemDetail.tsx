import React from 'react';
import { useParams } from 'react-router-dom';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';

const ItemDetail = () => {
  const { item_id } = useParams();
  const content = useTypeSelector(state => state.content);
  const currentItem = content.filter(el => el._id === item_id)

  return (
    <div>
      {item_id}
    </div>
  );
};

export default ItemDetail;
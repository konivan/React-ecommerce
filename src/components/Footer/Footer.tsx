import React, { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './Footer.css';

const Footer:FC = () => {
  const content = useTypeSelector(state => state.content);
  return (
    <div className={content.length !== 0 ? 'footer-wrap' : 'not-found-wrap'}>
      <div>Ecommerce</div>
      <div>©2022, Konivan, Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
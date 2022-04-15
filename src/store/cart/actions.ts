import { CartItem, actionTypes } from './types';

export const addToCart = (product: CartItem, count: number) => ({
  type: actionTypes.CART_ADD_ITEM,
  payload: {product, count}
})

export const removeFromCart = (productId: string) => ({
  type: actionTypes.CART_REMOVE_ITEM,
  payload: productId,
})
import { CartItem, actionTypes } from './types';

export const addToCart = (product: CartItem, count: number) => ({
  type: actionTypes.CART_ADD_ITEM,
  payload: {product, count}
})

export const removeFromCart = (productId: string) => ({
  type: actionTypes.CART_REMOVE_ITEM,
  payload: productId,
})

export const sortItemsByPrice = (product: CartItem) => ({
  type: actionTypes.SORT_BY_PRICE,
  payload: product,
})

export const sortItemsByName = (product: CartItem) => ({
  type: actionTypes.SORT_BY_NAME,
  payload: product,
})

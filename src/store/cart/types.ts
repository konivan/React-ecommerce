export enum actionTypes {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
}

interface CartAddItemPayload {
  product: CartItem,
  count: number,
}

interface CartAddItem {
  type: actionTypes.CART_ADD_ITEM,
  payload: CartAddItemPayload,
}

interface CartRemoveItem {
  type: actionTypes.CART_REMOVE_ITEM,
  payload: string,
}

export type TypeActionCart = CartAddItem | CartRemoveItem;

export interface CartItem {
  name: string,
  imagePath: string,
  price: number,
  count: number,
  _id: string,
}

export interface ContentItem {
  name: string,
  imagePath: string,
  price: number,
  _id: string,
}
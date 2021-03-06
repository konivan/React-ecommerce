import { Dispatch, SetStateAction } from "react";

export enum actionTypes {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
  SORT_BY_PRICE = 'SORT_BY_PRICE',
  SORT_BY_PRICE_LOWER = 'SORT_BY_PRICE_LOWER',
  SEARCH_CONTENT = 'SEARCH_CONTENT',
}

interface CartAddItemPayload {
  product: ContentItem,
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

interface SortByPrice {
  type: actionTypes.SORT_BY_PRICE,
  payload: CartItem,
}

interface SortByPriceLower {
  type: actionTypes.SORT_BY_PRICE_LOWER,
  payload: CartItem,
}

interface SearchContent {
  type: actionTypes.SEARCH_CONTENT,
  payload: string,
}

export type TypeActionCart = CartAddItem | CartRemoveItem | SortByPrice | SortByPriceLower | SearchContent;

export interface CartItem {
  name: string,
  imagePath: string,
  description: any,
  price: number,
  count: number,
  _id: string,
}

export interface ContentItem {
  name: string,
  imagePath: string,
  description: any,
  price: number,
  _id: string,
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>
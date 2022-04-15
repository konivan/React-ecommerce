import { actionTypes, CartItem, TypeActionCart } from "./types"

const initialState: CartItem[] = [];

export const cartReducer = (state = initialState, action: TypeActionCart) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM: {
      const cart = [...state];
      const {count, product} = action.payload;
      const foundProduct = cart.find(item => item._id === product._id)
      if (foundProduct) {
        foundProduct.count = count;
      } else {
        cart.push({
          ...product,
          count
        })
      }
      return cart;
    }

    case actionTypes.CART_REMOVE_ITEM: {
      const cart = [...state];
      cart.forEach((item, index) => {
        if(item._id === action.payload)cart.slice(index, 1);
      });

      return cart;
    }
    default:
      return state;
  }
}

import { actionTypes, CartItem, TypeActionCart } from "./types"

const initialState: CartItem[] = [];

export const cartReducer = (state = initialState, action: TypeActionCart) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM: {
      const cart = [...state];
      let {count, product} = action.payload;

      const foundProduct = cart.find(i => i._id === product._id)
      if (foundProduct) {
        foundProduct.count = count;
      } else if (count !== 0) {
        cart.push({
          ...product,
          count
        })
      } else return cart;
      return cart;
    }

    case actionTypes.CART_REMOVE_ITEM: {
      return state.filter(item => item._id !== action.payload);
    }
    default:
      return state;
  }
}

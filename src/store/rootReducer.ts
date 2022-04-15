import { cartReducer } from './cart/reducers';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
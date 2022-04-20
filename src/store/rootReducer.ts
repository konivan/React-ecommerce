import { cartReducer } from './cart/reducers';
import { combineReducers } from "redux";
import { contentReducer } from './cart/content-reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  content: contentReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
import { combineReducers } from "redux";
import {
  productReducer,
  slectedProductReducer,
  addToCartReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: slectedProductReducer,
  addToCart: addToCartReducer,
});

export default reducers;

import { combineReducers } from "redux";

import filters from "./filters";
import sneakers from "./sneakers";
import cart from "./cart";
import product from './product';

const rootReducer = combineReducers({
    filters,
    sneakers,
    cart,
    product,
});

export default rootReducer;
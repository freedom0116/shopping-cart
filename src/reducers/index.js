import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    cartItems: cartReducer
});

export default allReducers;
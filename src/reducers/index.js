import cartReducer from './cartReducer';
import orderReducer from './orderReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    cartItems: cartReducer,
    orderItems: orderReducer
});

export default allReducers;
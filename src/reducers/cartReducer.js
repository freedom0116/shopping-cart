const cartReducer = (state = JSON.parse(localStorage.getItem("cartItems")) || [], action) => {

    switch(action.type) {
        case 'ADD_TO_CART':
            return action.payload;
        case 'REMOVE_FROM_CART':
            return action.payload;
        case 'CHANGE_FROM_CART':
            return action.payload;
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

export default cartReducer;
const cartReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return action.payload;
        case 'REMOVE_FROM_CART':
            return action.payload;
        case 'CHANGE_FROM_CART':
            return action.payload;
        default:
            return state;
    }
};

export default cartReducer;
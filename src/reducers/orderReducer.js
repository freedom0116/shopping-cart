const orderReducer = (state = [], action) => {
    switch(action.type) {
        case 'CHECKOUT':
            return action.payload;
        case 'CLEAR_ORDER':
            return [];
        default:
            return state;
    }
};

export default orderReducer;
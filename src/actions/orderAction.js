export const checkout = (cartItems) => {
    return {
        type: 'CHECKOUT',
        payload: cartItems
    };
};

export const clearOrder = () => {
    return {
        type: 'CLEAR_ORDER'
    };
}
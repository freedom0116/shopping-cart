export const addtoCart = (cartItems, product) => {
    const updateItems = [...cartItems]
    let isInCart = false;
  
    updateItems.forEach(item => {
      if(item._id === product._id){
        item.count++;
        isInCart = true;
      }
    })

    if(!isInCart){
        updateItems.push({ ...product, count: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(updateItems));

    return {
        type: 'ADD_TO_CART',
        payload: updateItems
    };
};

export const removefromCart = (cartItems, item) => {
    const updateItems = cartItems.slice().filter(e => {
        return e._id !== item._id;
    });

    localStorage.setItem("cartItems", JSON.stringify(updateItems));

    return {
        type: 'REMOVE_FROM_CART',
        payload: updateItems
    };
};

export const changefromCount = (cartItems, item, count) => {
    const updateItems = cartItems.slice().filter(e => {
        if(e._id === item._id){
            e.count = count;
        }

        return e;
    })
    
    localStorage.setItem("cartItems", JSON.stringify(updateItems));

    return {
        type: 'CHANGE_FROM_CART',
        payload: updateItems
    };
};

export const clearCart = () => {
    localStorage.removeItem("cartItems");

    return {
        type: 'CLEAR_CART'
    };
};
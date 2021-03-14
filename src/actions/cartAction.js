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

    return {
        type: 'ADD_TO_CART',
        payload: updateItems
    }
}

export const removefromCart = (cartItems, item) => {
    const updateItems = cartItems.slice().filter(e => {
        return e._id !== item._id;
    });

    return {
        type: 'REMOVE_FROM_CART',
        payload: updateItems
    }
}

export const changefromCount = (cartItems, item, count) => {
    const updateItems = cartItems.slice().filter(e => {
        if(e._id === item._id){
            e.count = count;
        }

        return e;
    })

    console.log(updateItems)

    return {
        type: 'CHANGE_FROM_CART',
        payload: updateItems
    }
}
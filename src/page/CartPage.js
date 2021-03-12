import Cart from '../components/cart/Cart';

function cartPage(props) {
    const removefromCart = (target) => {
        let updateCart = props.cartItems.filter(item => {
            return item._id !== target._id;
        });

        props.setCartItems(updateCart);
    }

    return (
        <main>
            <Cart 
                cartItems={props.cartItems}
                removefromCart={removefromCart} />
        </main>
    );
}

export default cartPage;
import './CartPage.css'
import '../App.css'
import Cart from '../components/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';

function CartPage(props) {
    const cartItems = useSelector(state => state.cartItems);

    const totalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.price * item.count;
        });

        return totalPrice;
    }

    return (
        <main className="cartPage">
            <Cart />
            <div className="cart-left">
                <div className="total-price">
                    <div>Total Price</div>
                    <div>{`$${totalPrice().toFixed(1)}`}</div>
                </div>
                <button className="button alert">
                    Proceed to Checkout
                </button>
            </div>
        </main>
    );
}

export default CartPage;
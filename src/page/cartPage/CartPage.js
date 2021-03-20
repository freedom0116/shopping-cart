import './CartPage.css'
import '../../App.css'
import Cart from '../../components/cart/Cart';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CartPage() {
    const cartItems = useSelector(state => state.cartItems);
    const history = useHistory();

    const totalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.price * item.count;
        });

        return totalPrice;
    }

    const handleCheckout = () => {
        history.push('/infoInput');
    }

    return (
        <main className="cartPage">
            <Cart />
            <div className="cart-left">
                <div className="total-price">
                    <div>Total Price</div>
                    <div>{`$${totalPrice().toFixed(1)}`}</div>
                </div>
                <button 
                    className="button alert" 
                    onClick={handleCheckout}
                    style={{ filter: (cartItems.length === 0) ? 'grayscale(50%)' : '' }}
                >
                    Proceed to Checkout
                </button>
            </div>
        </main>
    );
}

export default CartPage;
import './Cart.css'
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { removefromCart, changefromCount } from '../../actions/cartAction';

function Cart(props) {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    const handleCount = (item, count) => {
        if(count === "10+"){
            console.log("asd");
        }else{
            dispatch(changefromCount(cartItems, item, count));
        }
    }

    return (
        <div className="cart">
            {!cartItems ? 
                <div>Loading...</div> :
                <ul className="items">
                    { cartItems.map(item => (
                        <li className="item" key={item._id}>
                            <img
                                src={item.image} 
                                alt={item.title} />
                            <div className="item-right">
                                <div className="item-title">{item.title}</div>
                                <select 
                                    className="item-count" 
                                    value={item.count}
                                    onChange={e => handleCount(item, e.target.value)}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10+">10+</option>
                                </select>
                                <div className="item-price">{`$${(item.price * item.count).toFixed(1)}`}</div>
                                <button
                                    className="button primary"
                                    onClick={() => dispatch(removefromCart(cartItems, item))}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default Cart;
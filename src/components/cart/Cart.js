import './Cart.css'
import '../../App.css';

function cart (props) {
    const { cartItems, removefromCart } = props;

    // const handleCount = {

    // }

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
                                <select className="item-count" value={item.count}>
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
                                <div className="item-price">{`$${item.price}`}</div>
                                <button
                                    className="button primary"
                                    onClick={() => removefromCart(item)}
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

export default cart;
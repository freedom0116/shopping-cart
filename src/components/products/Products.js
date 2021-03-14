import './Products.css';
import '../../App.css';
import Star from './Star';
import { useDispatch, useSelector } from 'react-redux';

import { addtoCart } from '../../actions/cartAction';

function Products(props) {
    const { products } = props;

    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    
    return (
        <div>
        {!products ? 
            <div>Loading...</div> : 
            <ul className="products">
                { products.map(product => (
                    <li className="product" key={product._id}>
                        <img src={product.image} alt={product.title} />
                        <div className="product-info">
                            <div className="product-title">{product.title}</div>
                            
                            <div className="rating">
                                <Star rating={product.rating} number={0} />
                                <Star rating={product.rating} number={1} />
                                <Star rating={product.rating} number={2} />
                                <Star rating={product.rating} number={3} />
                                <Star rating={product.rating} number={4} />
                            </div>
                            <div className="product-price">
                                <div>{`$${product.price}`}</div>
                                <button 
                                    className="button primary"
                                    onClick={() => dispatch(addtoCart(cartItems, product))}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        }
        </div>
    );
}

export default Products;
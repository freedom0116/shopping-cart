import './Products.css';
import '../../App.css';
import Star from './Star';

function products(props) {
    const { products, addtoCart } = props;
    
    return (
        <div>
            <div></div>
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
                                    onClick={() => addtoCart(product)}
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

export default products;
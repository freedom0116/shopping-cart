import './Products.css'
import '../../App.css'

function products(props) {
    const { data } = props;
    
    return (
        <div>
            {!data.products ? 
                <div>Loading...</div> : 
                <ul className="products">
                    { data.products.map(product => (
                        <il key={product._id} className="product">
                            <a href="#">
                                <img src={product.image} alt={product.title} />
                            </a>
                            <div>{product.title}</div>
                            <div className="product-price">
                                <div>{`$${product.price}`}</div>
                                <button className="button primary">
                                    Add to cart
                                </button>
                            </div>
                        </il>
                    ))}
                </ul>
            }
        </div>
    );
};

export default products;
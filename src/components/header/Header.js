import './Header.css';
import '../../App.css';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const cartItems = useSelector(state => state.cartItems);

    return (
        <div className="header">
            <Link to="/" className="link-font">Shopping Cart</Link>
            <Link to="/cart" className="link-font cartIcon">
                <ShoppingCartOutlined fontSize="large" />
                {cartItems.length === 0 ?
                    <div></div> :
                    <div>{cartItems.length}</div>
                }
            </Link>
        </div>
    );
}

export default Header;
import './Header.css';
import '../../App.css';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function header() {
    return (
        <div className="header">
            <Link to="/" className="link-font">Shopping Cart</Link>
            <Link to="/cart" className="link-font">
                <ShoppingCartOutlined fontSize="large" />
            </Link>
        </div>
    );
}

export default header;
import '../../App.css';
import './Order.css';
import { useSelector } from 'react-redux';

function Order(props) {
    const orderItems = useSelector(state => state.orderItems);

    const totalPrice = () => {
        let totalPrice = 0;
        orderItems.forEach(item => {
            totalPrice += item.price * item.count;
        });

        return totalPrice;
    }

    return (
        <div className="order">
            <div className="title">{`Order `}</div>
            <div className="row">
                <div>Name:</div>
                <div>{props.name}</div>
            </div>
            <div className="row">
                <div>Email:</div>
                <div>{props.email}</div>
            </div>
            <div className="row">
                <div>Address:</div>
                <div>{props.address}</div>
            </div>
            <div className="row">
                <div>phone:</div>
                <div>{props.phoneNumber}</div>
            </div>
            <div className="row">
                <div>Date:</div>
                <div>1</div>
            </div>
            <div className="row">
                <div>Total:</div>
                <div>{`$${totalPrice().toFixed(1)}`}</div>
            </div>
            <div className="orderItem-row">
                <div>Items:</div>
                <li className="orderItem-list">
                    {
                        orderItems.map(item => 
                            <ul key={item._id}>
                                {`${item.count} x ${item.title}`}
                            </ul>
                        )
                    }
                </li>
            </div>
            <button
                className="button alert"
                onClick={props.backToHome}
            >
                Back to Home
            </button>
        </div>
    );
}

export default Order;
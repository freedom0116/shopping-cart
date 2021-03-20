import '../../App.css'
import './InfoPage.css'
import React, { useState } from "react";
import { TextField, Modal } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Order from '../../components/order/Order';
import { clearCart } from '../../actions/cartAction';
import { checkout, clearOrder } from '../../actions/orderAction';

function InfoPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const [open, setOpen] = useState(false);
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const history = useHistory();    

    const checkInput = () => {
        let hasError = false;

        setNameError(false);
        setEmailError(false);
        setAddressError(false);
        setPhoneError(false);

        if(!name){
            setNameError(true);
            hasError = true;
        }

        if(!email){
            setEmailError(true);
            hasError = true;
        }

        if(!address){
            setAddressError(true);
            hasError = true;
        }

        if(!phoneError){
            setPhoneError(true);
            hasError = true;
        }

        return hasError ? false : true;
    }
  
    const sendOrder = () => {
        if(checkInput()){
            dispatch(checkout(cartItems));
            setOpen(true);
        }
    };
  
    const backToHome = () => {
        dispatch(clearOrder());
        dispatch(clearCart());
        setOpen(false);
        history.push('/');
    };

    const TextFieldStyle = {
        margin: '10px', 
        width: '500px'
    };    

    return (
        <div className="infoPage">
            <div></div>
            <TextField 
                label="Name" 
                variant="outlined"
                value={name}
                style={TextFieldStyle}
                onChange={e => setName(e.target.value)}
                autoFocus={true}
                error={nameError}
            />
            <TextField 
                label="Email" 
                variant="outlined"
                value={email}
                style={TextFieldStyle}
                onChange={e => setEmail(e.target.value)}
                error={emailError}
            />
            <TextField 
                label="Address" 
                variant="outlined"
                value={address}
                style={TextFieldStyle}
                onChange={e => setAddress(e.target.value)}
                error={addressError}
            />
            <TextField 
                label="PhoneNumber" 
                variant="outlined"
                value={phoneNumber}
                style={TextFieldStyle}
                onChange={e => setPhoneNumber(e.target.value)}
                error={phoneError}
            />
            <button 
                className="button alert"
                style={TextFieldStyle}
                onClick={sendOrder}
            >
                Send
            </button>
            <Modal
                open={open}
                onClose={backToHome}
                onEscapeKeyDown={backToHome}
                style={{
                    height: "100%",
                    width: "100%"
                }}
                className="modal"
            >
                <div className="orderlist">
                    <Order 
                        cartItems={cartItems}
                        name={name}
                        email={email}
                        address={address}
                        phoneNumber={phoneNumber}
                        backToHome={backToHome}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default InfoPage;
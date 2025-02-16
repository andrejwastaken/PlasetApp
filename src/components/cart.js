import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const buttonStyle = {
    backgroundColor: 'rgb(41, 56, 73)',
    float: 'right',
    borderColor: 'black',
    width: '170px',
    alignSelf: 'center',
}

const additionalStyle = {
    width: '70%',
    alignSelf: 'center',
    alignContent: 'center',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}


const Cart = ({ cartItems, show, handleClose, handleIncrease, handleDecrease }) => {

    // state за дали е кликнато копчето Make Order
    const [makeOrderClicked, setMakeOrderClicked] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handleMakeOrder = () => {
        setMakeOrderClicked(true);
    };

    const handleModalClose = () => {
        setMakeOrderClicked(false);
        handleClose();
    };


    const handleConfirmOrder = () => {
        setOrderConfirmed(true);
        setMakeOrderClicked(false);
        // You can perform additional actions related to confirming the order here
        // For example, you can close the modal and show a notification.
        handleClose();
        toast.success('Order confirmed successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    return (
        <Modal show={show} onHide={handleModalClose}  backdrop={false}>
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.map((item, index) => (
                    <div key={index}>
                        <h5>{item.title}</h5>

                        <p>Details: {item.details}</p>
                        <div className="d-flex align-items-center" style={{justifyContent: 'end'}}>
                            <button
                                className="btn btn-success"
                                onClick={() => handleIncrease(index)}
                            >
                                +
                            </button>
                            <p className="mx-2" style={{marginTop: '15px'}}>Quantity: {item.quantity}</p>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDecrease(index)}
                            >
                                -
                            </button>
                        </div>
                        <p style={{justifyContent: 'end', display: 'flex'}}>Price: {item.price}</p>
                        <hr />
                    </div>
                ))}

                {makeOrderClicked && (
                    <div style={additionalStyle}>
                        <h4>Additional Information</h4>
                        <Form style={{width: '80%'}}>
                            <Form.Group controlId="phoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Label>Message (Optional)</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Add a message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                {!orderConfirmed && (
                    <div className="d-flex justify-content-end">
                        <Button style={buttonStyle} variant="primary" onClick={handleMakeOrder}>
                            Make an order
                        </Button>
                    </div>
                )}
                {makeOrderClicked && !orderConfirmed && (
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                )}
                {makeOrderClicked && !orderConfirmed && (
                    <div className="d-flex justify-content-end">
                        <Button style={buttonStyle} variant="success" onClick={handleConfirmOrder}>
                            Confirm Order
                        </Button>
                    </div>
                )}

            </Modal.Footer>
        </Modal>
    );
};

export default Cart;

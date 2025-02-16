import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Registration from '../Register';*/
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Registration from "../register/register";
import SignIn from "../sign-in/sign-in";

function RegistrationLogin(props)
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) =>
    {
        event.preventDefault();
        setShow(true);
    }


    const buttonStyle = {
        backgroundColor: '#293849',
        color: 'white',
        border: 'none',
        marginRight: '15px',
        padding:'10px',
    };

    return (
        <>
            <Button variant="primary" style={buttonStyle} onClick={handleShow}>
                Register/Log-in
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>

                    <Registration/>

                    <div style={{borderTop: '1px solid black', marginTop: '100px',
                        marginBottom: '20px'}}></div>

                    <SignIn/>

                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button  style={buttonStyle} variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default RegistrationLogin;
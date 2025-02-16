import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebase'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);


    const buttonStyle = {
        backgroundColor: '#293849',
        marginTop:'40px',
        float:'right',
        borderColor: 'black',
    };

    const handleRegister = async () => {
        try
        {
            // проверка дали се пополнети полињата
            if (!email || !password)
            {
                setErrorMessage('Email and password are required.');
                return;
            }

            // проверка дали внесениот мејл е во правилен формат
            if (!isValidEmail(email))
            {
                setErrorMessage('Invalid email format.');
                return;
            }


            // проверка password да е подолг од 6 карактери
            if (password.length < 6)
            {
                setErrorMessage('Password must be at least 6 characters.');
                return;
            }

            // креирање на корисник во база
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userRef = doc(firestore, 'users', user.uid);
            await setDoc(userRef, {
                email: user.email,
            });

        }
        catch (error)
        {
            console.error('Error registering user:', error);

            switch (error.code)
            {
                case 'auth/invalid-email':
                    setErrorMessage('Invalid email format.');
                    break;
                case 'auth/weak-password':
                    setErrorMessage('Password is too weak.');
                    break;
                case 'auth/email-already-in-use':
                    setErrorMessage('Email is already in use. Please use a different email.');
                    break;
                default:
                    setErrorMessage('An error occurred. Please try again later.');
            }
        }
    };
    const isValidEmail = (email) =>
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <Form>
            <h2 style={{ textAlign: 'center' }}>Create new acount</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button style={buttonStyle} variant="primary" onClick={handleRegister}>
                Register
            </Button>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {registrationSuccess && (
                <p style={{ color: 'green', marginTop: '10px' }}>User successfully registered!</p>
            )}


        </Form>
    );

};

export default Registration;

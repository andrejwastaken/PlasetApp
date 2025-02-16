import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const buttonStyle = {
        backgroundColor: '#293849',
        marginTop:'40px',
        float:'right',
        borderColor: 'black',
    };

    const handleSignIn = async () => {
        try
        {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log('User signed in:', user);

            setSuccessMessage('Login successful!');

        }
        catch (error)
        {
            console.error('Error signing in:', error);

            switch (error.code) {
                case 'auth/invalid-password':
                    setErrorMessage('Invalid password');
                    break;
            }
        }

    };

    return (

        <Form>
            <h2 style={{textAlign:'center'}}>Sign In</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
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

            <Button style={buttonStyle} variant="primary" onClick={handleSignIn}>
                Sign in
            </Button>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        </Form>
    );
};

export default SignIn;

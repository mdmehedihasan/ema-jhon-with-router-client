import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "../Login/Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBLur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { rplace: true });
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBLur} type="password" required />
                    </div>
                    <p>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John?<Link className='form-link' to="/signup" eleme>Create An Account</Link>

                </p>

            </div>
        </div>
    );
};

export default Login;
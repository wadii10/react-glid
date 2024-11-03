import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducer/userReducer';

const Login = () => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        const token = 'hardCodedToken';
        // const userInfo = { name: 'Wadii'};

        dispatch(login({ token }));
    };

    return (
        <div>
            <h2>hello Login</h2>
            <button onClick={handleLogin}>login</button>
        </div>
    );
};

export default Login;
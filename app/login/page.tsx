"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl } from '../constants/api';

import { useRouter } from 'next/navigation';
import { login } from '../utils/redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogin = (userData : any) => {

      dispatch(login(userData));
    };


    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseUrl}auth/login`, {
                email,
                password,
            });

            console.log(response.data);
            if (response.status == 200) {
                // Redirect to another page
                let session = response.data.session;
                handleLogin(session.passport?.user);
                router.push('/');
            }
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
        // Add your login logic here
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Email:</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password:</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-md"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
export default LoginPage;
// export default wrapper.withRedux(LoginPage);

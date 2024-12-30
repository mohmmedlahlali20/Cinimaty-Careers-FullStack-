'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setLoading(true);

        if (!email || !password) {
            setErrorMessage('Email and password are required!');
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post('/api/login', { email, password });
            Cookies.set('token', res.data.token);
            window.location.href = '/dashboard';
        } catch (err) {
            setErrorMessage(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col rounded-xl bg-white p-8 shadow-lg">
                <h4 className="text-xl font-medium text-slate-800">Sign In</h4>
                <p className="text-slate-500 font-light">
                    Welcome back! Please log in to your account.
                </p>
                <form onSubmit={login} className="mt-8 mb-2 w-80 sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-slate-600">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-slate-500 hover:border-slate-400"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm text-slate-600">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-slate-500 hover:border-slate-400"
                                placeholder="Your Password"
                            />
                        </div>
                    </div>
                    {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 w-full bg-slate-800 text-white text-sm py-2 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    <p className="flex justify-center mt-6 text-sm text-slate-600">
                        Don't have an account?{' '}
                        <Link href="/register" className="ml-1 text-sm font-semibold text-slate-700 underline">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

'use client';
import React, { useState } from "react";
import Link from "next/link";
import path from "../../utils/path";

export default function Register() {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const register = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (!fullName || !email || !password) {
            setErrorMessage("All fields are required!");
            return;
        }

        setLoading(true);

        try {
            const res = await path.post('/api/register', { fullName, email, password });

            if (res.status === 201 || res.data.success) {
                window.location.href = '/login';
            } else {
                setErrorMessage(res.data.message || "Registration failed!");
            }
        } catch (err) {
            setErrorMessage(err.response?.data?.message || "Something went wrong. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col rounded-xl bg-white p-8 shadow-lg">
                <h4 className="text-xl font-medium text-slate-800">Sign Up</h4>
                <p className="text-slate-500 font-light">
                    Nice to meet you! Enter your details to register.
                </p>
                <form className="mt-8 mb-2 w-80 sm:w-96" onSubmit={register}>
                    {errorMessage && (
                        <div className="mb-4 text-sm text-red-600">
                            {errorMessage}
                        </div>
                    )}
                    <div className="mb-4 flex flex-col gap-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm text-slate-600">
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-slate-500 hover:border-slate-400"
                                placeholder="Your Name"
                            />
                        </div>
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
                    <button
                        type="submit"
                        disabled={loading}
                        className={`mt-4 w-full ${
                            loading ? 'bg-gray-400' : 'bg-slate-800 hover:bg-slate-700'
                        } text-white text-sm py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500`}
                    >
                        {loading ? "Registering..." : "Sign Up"}
                    </button>
                    <p className="flex justify-center mt-6 text-sm text-slate-600">
                        Already have an account?{" "}
                        <Link href="/login" className="ml-1 text-sm font-semibold text-slate-700 underline">
                            Log In
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

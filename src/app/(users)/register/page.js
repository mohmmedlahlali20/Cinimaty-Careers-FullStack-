import React from "react";
import Link from "next/link";

export default function Register() {
    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col rounded-xl bg-white p-8 shadow-lg">
                <h4 className="text-xl font-medium text-slate-800">Sign Up</h4>
                <p className="text-slate-500 font-light">
                    Nice to meet you! Enter your details to register.
                </p>
                <form className="mt-8 mb-2 w-80 sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm text-slate-600"
                            >
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-slate-500 hover:border-slate-400"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm text-slate-600"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-slate-500 hover:border-slate-400"
                                placeholder="Your Email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm text-slate-600"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-slate-500 hover:border-slate-400"
                                placeholder="Your Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            id="remember-me"
                            className="h-5 w-5 cursor-pointer border border-slate-300 rounded checked:bg-slate-800 focus:ring-2 focus:ring-slate-500"
                        />
                        <label
                            htmlFor="remember-me"
                            className="ml-2 text-sm text-slate-600"
                        >
                            Remember Me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-slate-800 text-white text-sm py-2 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    >
                        Sign Up
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

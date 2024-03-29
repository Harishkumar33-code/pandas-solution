"use client";
import '../app/globals.css';
import React, { useState } from 'react';
import apiClient from '../app/api/index';
import Navbar from '@/components/Navbar/Navbar';

const SignIn: React.FC = () => {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignIn = () => {
    setShowSignInForm(true); // Show the sign-in form after signing in
  };

  const handleSignUp = () => {
    setShowSignInForm(false);
    setShowSignUpForm(true); // Show the sign-up form after signing up
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    const payload = { email: email, password: password };
    try {
      const response = await apiClient().post('login', payload);
      console.log('Response:', response);
      setShowSignInForm(false);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <div className="px-4 py-2">
        <Navbar onSignIn={handleSignIn} />
      </div>
      {showSignInForm && (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <form onSubmit={handleLogin} className="space-y-4 w-full max-w-md">
              <div className="w-full">
                <label htmlFor="email" className="block">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="password" className="block">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="w-full flex justify-center">
                <button type="submit" className="bg-green-500 text-white py-1.5 px-4 rounded-md hover:bg-green-600">Login</button>
              </div>
            </form>
            <br />
            <div className="flex justify-between items-center">
              <a href="#" className="text-blue-500 text-sm mr-4">Forget password?</a>
              <button onClick={handleSignUp}
                className="bg-green-500 text-white py-1.5 px-4 rounded-md hover:bg-green-600">Sign up
              </button>
            </div>
          </div>
        </div>
      )}
      {!showSignInForm && showSignUpForm &&(
        <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
          <form onSubmit={handleSignUp} className="space-y-4 w-full max-w-md">
            <div className="w-full">
              <label htmlFor="email" className="block">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="block">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="confirmPassword" className="block">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="w-full flex justify-center">
              <button type="submit" className="bg-green-500 text-white py-1.5 px-4 rounded-md hover:bg-green-600">Sign Up</button>
            </div>
          </form>
          <br />
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 text-sm mr-4">Already have an account? Sign in</a>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default SignIn;

// Navbar.tsx
import React from 'react';

type NavbarProps = {
    onSignIn: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onSignIn }) => {
    const handleSignIn = () => {
        onSignIn();
    };

    return (
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
            <div>
                <h1 className='text-2xl font-bold text-nav-green'>Pandas</h1>
            </div>
            <div className='flex items-center'>
                <button
                    className='bg-nav-green text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-nav-green hover:bg-white hover:border-2 hover:border-nav-green border-2 border-transparent
                transition duration-300 ease-in-out'
                    onClick={handleSignIn}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default Navbar;

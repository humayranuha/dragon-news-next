'use client';

import Link from 'next/link';
import React from 'react';
import { UserButton, useAuth, SignInButton } from '@clerk/nextjs';
import userAvatar from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className='flex justify-between items-center container mx-auto my-3'>
            <div></div>
            <ul className='flex justify-between items-center gap-3'>
                <li><NavLink href={'/'} className='hover:text-red-500'>Home</NavLink></li>
                <li><NavLink href={'/about'} className='hover:text-red-500'>About</NavLink></li>
                <li><NavLink href={'/career'} className='hover:text-red-500'>Career</NavLink></li>
            </ul>
            <div className='flex justify-between items-center gap-3'>
                {isSignedIn ? (
                    // Show UserButton when logged in
                    <UserButton 
                        afterSignOutUrl="/category/01"
                        appearance={{
                            elements: {
                                userButtonAvatarBox: "w-10 h-10",
                            }
                        }}
                    />
                ) : (
                    // Show Login button when logged out
                    <>
                        <Image src={userAvatar} width={40} height={40} alt='user avatar' />
                        <SignInButton mode="redirect">
                            <button className='btn bg-red-800 text-white hover:bg-red-700'>
                                Login
                            </button>
                        </SignInButton>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
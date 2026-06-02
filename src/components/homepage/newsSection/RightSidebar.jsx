'use client';

import React from 'react';
import { SignInButton } from '@clerk/nextjs';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2 className='text-xl font-bold p-2'>Login with:</h2>
            <div className='flex flex-col gap-2'>
                <SignInButton mode="redirect" forceRedirectUrl="/">
                    <button className='btn text-sm rounded-md p-2 border-blue-400 text-blue-400 flex items-center justify-center gap-2 w-full'>
                        <FaGoogle /> Login with Google
                    </button>
                </SignInButton>
                
                <SignInButton mode="redirect" forceRedirectUrl="/">
                    <button className='btn text-sm rounded-md p-2 flex items-center justify-center gap-2 w-full'>
                        <FaGithub /> Login with GitHub
                    </button>
                </SignInButton>
            </div>
        </div>
    );
};

export default RightSidebar;
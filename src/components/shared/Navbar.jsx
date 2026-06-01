import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto my-3'>
            <div></div>
            <ul className='flex justify-between items-center gap-3'>
                <li><NavLink href={'/'} className='hover:text-red-500'>Home</NavLink></li>
                <li><NavLink href={'/about'} className='hover:text-red-500'>About</NavLink></li>
                <li><NavLink href={'/career'} className='hover:text-red-500'>Career</NavLink></li>
            </ul>
            <div className='flex justify-between items-center gap-1'>
                <Image src={userAvatar} width={40} height={40} alt='user avatar' />
                <button className='btn bg-red-800 text-white'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;
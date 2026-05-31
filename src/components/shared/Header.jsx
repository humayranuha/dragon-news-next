import React from 'react';
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { format, compareAsc } from "date-fns";


const Header = () => {
    return (
        <div className='grid justify-center items-center text-center space-y-2 py-5'>
            <Image src={logo} width={300} height={200} alt='logo' />
            <p className='text-gray-500 text-md'>Journalism without Fear and Favor</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;
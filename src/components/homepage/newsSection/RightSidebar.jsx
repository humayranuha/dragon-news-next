import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2 className='text-xl font-bold p-2'>Login with:</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn text-sm rounded-md p-2  border-blue-400 text-blue-400'><FaGoogle />Login with google</button>
                <button className='btn text-sm rounded-md p-2'><FaGithub />Login with github</button>
            </div>
        </div>
    );
};

export default RightSidebar;
import React from 'react';
import Marquee from 'react-fast-marquee';

const breakingNews = [
    { id: 1, title: "BREAKING: Earthquake rocks coastal city, emergency declared" },
    { id: 2, title: "BREAKING: World leaders reach historic climate agreement" },
    { id: 3, title: "BREAKING: Major tech company announces record-breaking merger" },
    { id: 4, title: "BREAKING: Severe weather warning issued for three states" },
    { id: 5, title: "BREAKING: Scientists make breakthrough in cancer research" }
];

const BreakingNews = () => {

    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 p-2 container mx-auto'>
            <button className='bg-red-400 text-white text-center'>Latest News</button>
            <Marquee pauseOnHover='true'>
                {breakingNews.map(news => {
                    return <span key={news.id} className='mr-8'>{news.title}</span>
                })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;
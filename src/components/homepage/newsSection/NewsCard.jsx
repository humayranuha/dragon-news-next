import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className="flex items-center gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={i} className="text-yellow-500" />
            ))}
            <span className="ml-2 text-gray-600 font-semibold">{rating}</span>
        </div>
    );
};

const NewsCard = ({ news}) => {
    return (
        <div className="card bg-base-100 border border-slate-500 rounded-md shadow-sm">
            <div className="card-body p-2">
                {/* Author info */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image src={news.author?.img} alt={news.author?.name || "Author avatar"} width={40} height={40} unoptimized className="rounded-full" />
                        <div className="flex flex-col">
                            <span className="font-semibold ml-2">{news.author?.name}</span>
                            <span className='text-xs ml-2'>{news.author?.published_date}</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <CiShare2 className='font-bold text-xl hover:text-blue-500' />
                        <CiBookmark className='font-bold text-xl hover:text-blue-500' />
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
                
                <figure>
                    <Image src={news.image_url} alt={news.title} width={400} height={400} unoptimized className="w-full" />
                </figure>
                <p className='line-clamp-3'>{news.details}</p>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-start gap-5'>
                        <span className='text-xs flex'> {renderRating(news.rating.number)}</span>
                        <span className='text-xs ml-5'>{news.total_view}</span>
                    </div>
                    <Link href={`/news/${news._id}`} className=' mt-2 flex items-center justify-end'>
                        <button className='btn btn-active'>Show details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
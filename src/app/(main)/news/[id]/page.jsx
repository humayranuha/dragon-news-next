import React from 'react';
import { getNewsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { CiBatteryEmpty, CiCalendar, CiShare2 } from 'react-icons/ci';

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsById(id);

    // Helper function to render star ratings
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

    return (
        <div className="container mx-auto my-11 px-4 md:px-6">
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors">
                ← Back to Home
            </Link>

            {/* Main News Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                {/* Hero Image */}
                <div className="relative w-full h-100 md:h-125">
                    <Image
                        src={news.image_url}
                        alt={news.title}
                        fill
                        unoptimized
                        className="object-cover"
                        priority
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {news.category_id === "01" ? "International" :
                            news.category_id === "02" ? "Politics" :
                                news.category_id === "03" ? "Technology" :
                                    news.category_id === "04" ? "Entertainment" : "Sports"}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        {news.title}
                    </h1>

                    {/* Author & Meta Info */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6 mb-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src={news.author?.img || "https://via.placeholder.com/50"}
                                alt={news.author?.name || "Author"}
                                width={50}
                                height={50}
                                unoptimized
                                className="rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">{news.author?.name || "Unknown Author"}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <CiCalendar className="text-lg" />
                                    <span>{news.author?.published_date || "Date not available"}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-gray-600">

                                <span className="font-semibold">{news.total_view?.toLocaleString() || 0} views</span>
                            </div>
                            <div className="flex gap-3">
                                <CiShare2 className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />

                            </div>
                        </div>
                    </div>

                    {/* Rating Section */}
                    {news.rating && (
                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                <div>
                                    <span className="text-gray-600 font-medium">Reader Rating:</span>
                                    <div className="mt-1">
                                        {renderRating(news.rating.number)}
                                    </div>
                                </div>
                                {news.rating.badge && (
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        {news.rating.badge}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* News Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {news.details}
                        </p>
                    </div>

                    {/* Tags/Other Info */}
                    <div className='flex justify-between items-center mt-10'>
                        <div>
                            {news.others_info && (
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="flex flex-wrap gap-2">
                                        {news.others_info.is_todays_pick && (
                                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                                                🔥 Today Pick
                                            </span>
                                        )}
                                        {news.others_info.is_trending && (
                                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                                📈 Trending
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <Link href={`/category/${news.category_id}`} className="inline-block mt-6">
                                <button className="btn btn-error btn-sm">
                                    Related news
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related News / Recommendations (Optional) */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">You might also like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* You can add related news cards here using another API call */}
                    <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
                        More news coming soon...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;
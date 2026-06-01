import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories, activeId}) => {
    return (
        <div>
            <h1 className="text-xl font-bold text-center p-2">All Categories</h1>
            <ul className="flex flex-col gap-3">
                {categories.news_category.map(category => {
                    return <li key={category.category_id} className={`${activeId === category.category_id && "bg-slate-100 "} text-sm rounded-md p-2 text-center `}><Link href={`/category/${category.category_id}`}>{category.category_name}</Link></li>
                })}
            </ul>
        </div>
    );
};

export default LeftSidebar;
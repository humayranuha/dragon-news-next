import LeftSidebar from '@/components/homepage/newsSection/LeftSidebar';
import NewsCard from '@/components/homepage/newsSection/NewsCard';
import RightSidebar from '@/components/homepage/newsSection/RightSidebar';
import NoDataAnimation from '@/components/NoDataAnimation';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



const CategoryNewsPage = async ({params}) => {
    const {id} = await params;
    console.log(id);

    const categories = await getCategories();
    // console.log(categories.news_category);

    const news = await getNewsByCategoryId(id);
    // console.log(news);

    return (
        <div className="grid grid-cols-12 gap-3 container mx-auto my-11">
            <div className="text-black text-2xl col-span-3 p-2">
                <LeftSidebar categories={categories} activeId={id} />
            </div>
            <div className="text-black text-2xl col-span-6 flex flex-col gap-10">
                <h1 className="text-xl font-bold text-center p-2">All News</h1>
                {news.length > 0 ?news.map(n => {
                    return <NewsCard key={n._id} news={n}/>
                }): <div className='flex items-center justify-center'><NoDataAnimation /></div>}
            </div>
            <div className="text-black col-span-3 p-3">
                <RightSidebar />
            </div>
        </div>
    );
};

export default CategoryNewsPage;
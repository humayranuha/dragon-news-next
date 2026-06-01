import LoadingAnimation from "@/components/LoadingAnimation";
import Image from "next/image";

async function getCategories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);
  return (
    <div className="grid grid-cols-12 gap-3 container mx-auto my-11">
      <div className="text-black text-2xl bg-red-50 col-span-3 p-2">
        <h1 className="text-xl font-bold text-center p-2">All Categories</h1>
        <ul className="flex flex-col gap-3">
          {categories.news_category.map(category => {
            return <li key={category.category_id} className="bg-slate-100 text-sm rounded-md p-2 text-center ">{category.category_name}</li>
          })}
        </ul>
      </div>
      <div className="text-white text-2xl bg-red-800 col-span-6">All News</div>
      <div className="text-white text-2xl bg-teal-800 col-span-3">Social Icons</div>
    </div>
  );
}

import LeftSidebar from "@/components/homepage/newsSection/LeftSidebar";
import RightSidebar from "@/components/homepage/newsSection/RightSidebar";
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
      <div className="text-black text-2xl col-span-3 p-2">
        <LeftSidebar categories={categories} activeId="01"/>
      </div>
      <div className="text-white text-2xl bg-red-800 col-span-6">All News</div>
      <div className="text-black col-span-3 p-3">
        <RightSidebar />
      </div>
    </div>
  );
}

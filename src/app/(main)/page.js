import { redirect } from "next/navigation";

const default_category_id = "01";

const HomePage = async () => {
    redirect(`/category/${default_category_id}`);
};

export default HomePage;
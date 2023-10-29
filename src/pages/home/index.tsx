import CategoryList from "../../container/category-list/category-list";
import PageLayout from "./../../layout/public-page";

export default function Home() {
  const categoryList = [
    {
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    },
    {
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    },
    {
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    },
    {
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    },
    {
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    }
  
  ];
  return (
    <PageLayout>
      <section>
        <CategoryList title={"دسته بندی محصولات"} categoryList={categoryList} />
      </section>
      <section className="pt-[92px]">
    
      </section>
    </PageLayout>
  );
}
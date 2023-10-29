import CategoryList from "../../container/category-list/category-list";
import ProductContainer from "../../container/product-container/product-container";
import PageLayout from "./../../layout/public-page";

export default function Home() {
  const categoryList = [
    {
      id: 1,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assets/image/home-assets/1.png",
    },
    {
      id: 2,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assets/image/home-assets/1.png",
    },
    {
      id: 3,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assets/image/home-assets/1.png",
    },
    {
      id: 4,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assets/image/home-assets/1.png",
    },
    {
      id: 5,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assets/image/home-assets/1.png",
    },
  ];

  const productList = [
    {
      id: 1,
      productTitle: "قهوه",
      productImage: "/assets/image/home-assets/2.jpg",
      productPrice: 5.99,
      productCombination: {
        item1: "نوع A",
        item2: "نوع B",
      },
    },
    {
      id: 2,
      productTitle: "کاپوچینو",
      productImage: "/assets/image/home-assets/2.jpg",
      productPrice: 6.99,
      productCombination: {
        item1: "شیرین",
        item2: "تلخ",
      },
    },
    {
      id: 3,
      productTitle: "لاته",
      productImage: "/assets/image/home-assets/2.jpg",
      productPrice: 7.99,
      productCombination: {
        item1: "بزرگ",
        item2: "کوچک",
      },
    },
    {
      id: 4,
      productTitle: "اسپرسو",
      productImage: "/assets/image/home-assets/2.jpg",
      productPrice: 4.99,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
  ];
  return (
    <PageLayout>
      <section>
        <CategoryList title={"دسته بندی محصولات"} categoryList={categoryList} />
      </section>
      <section className="pt-[92px]">
        <ProductContainer productList={productList} title={""} />
      </section>
    </PageLayout>
  );
}
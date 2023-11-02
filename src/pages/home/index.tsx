import CategoryList from "../../container/category-list/category-list";
import ProductCartSkeleton from "../../container/skeleton/product-cart";
import Slider from "../../container/slider/slider";
import PageLayout from "./../../layout/public-page";
import { Suspense, lazy } from "react";
const ProductContainer = lazy(
  () => import("../../container/product-container/product-container")
);

export default function Home() {
  const categoryList = [
    {
      id: 1,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    },
    {
      id: 2,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    },
    {
      id: 3,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    },
    {
      id: 4,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    },
    {
      id: 5,
      categoryTitle: "عنوان تستی",
      categoryImage: "/assetes/image/home-assetes/1.png",
    },
  ];

  const productList = [
    {
      id: 1,
      productTitle: "قهوه",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 59900,
      productCombination: {
        item1: "نوع A",
        item2: "نوع B",
      },
    },
    {
      id: 2,
      productTitle: "کاپوچینو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 60000,
      productCombination: {
        item1: "شیرین",
        item2: "تلخ",
      },
    },
    {
      id: 3,
      productTitle: "لاته",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 72000,
      productCombination: {
        item1: "بزرگ",
        item2: "کوچک",
      },
    },
    {
      id: 4,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
  ];

  const sliderItem = [
    {
      sliderPath: "/assetes/image/home-assetes/4.webp",
      sliderHref: "",
    },
    {
      sliderPath: "/assetes/image/home-assetes/5.webp",
      sliderHref: "",
    },
  ];
  return (
    <PageLayout>
      <section className="pt-5  ">
        <Slider slider={sliderItem} />
      </section>
      <section>
        <CategoryList title={"دسته بندی محصولات"} categoryList={categoryList} />
      </section>
      <section className="pt-8 pb-5">
        <Suspense fallback={<ProductCartSkeleton />}>
          <ProductContainer
            productList={productList}
            title={"پرفروش ترین‌ها"}
          />
        </Suspense>
      </section>
      <section className="pt-10 pb-10 w-full h-auto lg:px-[130px] px-5">
        <img
          src="/assetes/image/home-assetes/3.png"
          className="w-full h-auto"
          alt=""
        />
      </section>
      <section className=" pb-10">
        <Suspense fallback={<ProductCartSkeleton />}>
          <ProductContainer productList={productList} title={""} />
        </Suspense>
      </section>
    </PageLayout>
  );
}

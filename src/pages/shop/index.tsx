import ProductContainer from "../../container/product-container/product-container";
import PageLayout from "./../../layout/public-page";
import { Suspense, lazy } from "react";
const ProductCartSkeleton = lazy(
  () => import("../../container/skeleton/product-cart")
);

export default function Shop() {
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
    {
      id: 5,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 6,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 7,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 8,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 9,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 10,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 11,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 12,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 11,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 12,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 11,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
    {
      id: 12,
      productTitle: "اسپرسو",
      productImage: "/assetes/image/home-assetes/2.jpg",
      productPrice: 420010,
      productCombination: {
        item1: "قوی",
        item2: "ملایم",
      },
    },
  ];

  return (
    <PageLayout>
      <section className="px-2 pb-10">
        <Suspense fallback={<ProductCartSkeleton />}>
          <ProductContainer productList={productList} title={""} />
        </Suspense>
      </section>
    </PageLayout>
  );
}

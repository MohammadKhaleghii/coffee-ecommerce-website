import { ProductDetails } from "../../component/product-card/product-card.interface";
import CategoryList from "../../container/category-list/category-list";
import ProductCartSkeleton from "../../skeleton/product-cart";
import SliderSkeleton from "../../skeleton/slider";
import Slider from "../../container/slider/slider";
import { SliderInput } from "../../services/dto/slider-input";
import {
  addCollecionAndDocment,
  getCategoriesCollectionAndDocument,
  getSlidersCollectionAndDocument,
  getSpecialProductsCollectionAndDocument,
  getTopProductsCollectionAndDocument,
} from "../../services/firestore-config";
import PageLayout from "./../../layout/public-page";
import { lazy, useEffect, useState, Suspense } from "react";
import CategoryItemSkeleton from "../../skeleton/category-item";
import { CategoryItemInput } from "../../services/dto/category-item-input";
import BannerSkeleton from "../../skeleton/banner";

const ProductContainer = lazy(
  () => import("../../container/product-container/product-container")
);

export default function Home() {
  const [sliders, setSliders] = useState<SliderInput[]>();
  const [topProducts, setTopProducts] = useState<ProductDetails[]>();
  const [specialProducts, setSpecialProducts] = useState<ProductDetails[]>();
  const [categoryList, setCategoryList] = useState<CategoryItemInput[]>();

  useEffect(() => {
    // get Sliders

    getSlidersCollectionAndDocument("sliders").then((response) => {
      setSliders(response);
    });

    // get Top products
    getTopProductsCollectionAndDocument("topSaleProducts").then((response) =>
      setTopProducts(response)
    );
    // get Special Products
    getSpecialProductsCollectionAndDocument("specialProducts").then(
      (response) => setSpecialProducts(response)
    );

    // get all categories
    getCategoriesCollectionAndDocument("categories").then((response) =>
      setCategoryList(response)
    );
  }, []);

  return (
    <PageLayout>
      <section className="pt-5  ">
        {!sliders ? <SliderSkeleton /> : <Slider slider={sliders} />}
      </section>
      <section>
        {!categoryList ? (
          <CategoryItemSkeleton />
        ) : (
          <CategoryList
            title={"دسته بندی محصولات"}
            categoryList={categoryList}
          />
        )}
      </section>
      <section className="pt-8 pb-5">
        {!specialProducts ? (
          <ProductCartSkeleton />
        ) : (
          <ProductContainer
            productList={specialProducts}
            title={"پرفروش ترین‌ها"}
          />
        )}
      </section>
      <section className="pt-10 pb-10 w-full h-auto lg:px-[130px] px-5">
        
        <Suspense fallback={<BannerSkeleton />}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/coffe-web-bc1c8.appspot.com/o/1110.png?alt=media&token=0cdfe04b-265f-401d-b7a6-98af8bfa6a17&_gl=1*czn4uw*_ga*MTU2NDYwNTAzLjE2OTY4NjUwMzY.*_ga_CW55HF8NVT*MTY5OTI1Mzg2MS4yMC4xLjE2OTkyNTcwNjMuNTYuMC4w"
            className="w-full h-auto"
            alt=""
          />
        </Suspense>
      </section>
      <section className=" pb-10">
        {!topProducts ? (
          <ProductCartSkeleton />
        ) : (
          <ProductContainer productList={topProducts} title={""} />
        )}
      </section>
    </PageLayout>
  );
}

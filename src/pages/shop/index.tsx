import { DocumentData } from "firebase/firestore";
import { ProductDetails } from "../../component/product-card/product-card.interface";
import ProductContainer from "../../container/product-container/product-container";
import { getShopProductsCollectionAndDocument } from "../../services/firestore-config";
import PageLayout from "./../../layout/public-page";
import { Suspense, lazy, useState, useEffect, useTransition } from "react";
import toast, { Toaster } from "react-hot-toast";
const ProductCartSkeleton = lazy(
  () => import("../../skeleton/product-cart")
);

export default function Shop() {
  const [productList, setProductList] = useState<ProductDetails[]>();
  const [isPending, startTransition] = useTransition();
  console.log(isPending);
  useEffect(() => {
    getShopProductsCollectionAndDocument("products")
      .then((response) => {
        startTransition(() => {
          setProductList(response);
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("لطفا فیلتر شکن خود را متصل کنید");
      });
  }, []);

  return (
    <PageLayout>
      <section className="px-2 pb-10">
        {!productList ? (
          <ProductCartSkeleton />
        ) : (
          <ProductContainer productList={productList} title={""} />
        )}
        <Toaster />
      </section>
    </PageLayout>
  );
}

import {DocumentData} from "firebase/firestore";
import {ProductDetails} from "../../components/product-card/product-card.interface";
import ProductContainer from "../../container/product-container/product-container";
import {getShopProductsCollectionAndDocument} from "../../services/firestore-config";
import PageLayout from "../../layout/public-page";
import {Suspense, lazy, useState, useEffect, useTransition} from "react";
import toast, {Toaster} from "react-hot-toast";
import ProductCartSkeleton from "../../container/skeleton/product-cart";
export default function Shop() {
  const [productList, setProductList] = useState<ProductDetails[]>();
  useEffect(() => {
    getShopProductsCollectionAndDocument("products")
      .then((response) => {
        setProductList(response);
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
      </section>
    </PageLayout>
  );
}

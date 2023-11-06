import { useSelector } from "react-redux";
import CartItem from "../../component/cart-item/cart-item";
import PageLayout from "./../../layout/public-page";
import { CartItemProps } from "../../component/cart-item/cart-item.interface";

export default function Cart() {
  const selectCart: CartItemProps[] = useSelector((state: any) => state.cart);

  return (
    <PageLayout>
      <section className="px-2 pb-10">
        {selectCart.length ? (
          <>
            <div className="container mx-auto mt-10">
              <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                  <div className="flex justify-between border-b pb-8">
                    <h1 className="font-semibold text-2xl">سبد خرید</h1>
                    <h2 className="font-semibold text-2xl"></h2>
                  </div>
                  <div className="flex mt-10 mb-5">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                      جزئیات محصول
                    </h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                      تعداد
                    </h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                      قیمت
                    </h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                      جمع
                    </h3>
                  </div>
                  {selectCart.map((item) => (
                    <CartItem
                      key={item.productID}
                      imagePath={item.imagePath}
                      productBrand={item.productBrand}
                      productID={item.productID}
                      productPrice={item.productPrice}
                      productTitle={item.productTitle}
                      productQTY={item.productQTY}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <img src="assetes/image/cart-assetes/empty-cart.webp" alt="" />
            <h2 className="lg:pt-5 lg:pb-5 pt-2 text-3xl font-bold">
              سبد خرید شما خالی می باشد
            </h2>
          </div>
        )}
      </section>
    </PageLayout>
  );
}

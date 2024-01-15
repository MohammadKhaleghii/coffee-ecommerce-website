import {Dialog, Transition} from "@headlessui/react";
import {thousandSeparator} from "../../utilities/thousand-separator";
import ProductCartButton from "../product-card-button/product-card-button";
import {ProductCardProps} from "./product-card.interface";
import {Fragment, useState} from "react";

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const [isProductDetailsDialogOPen, setIsProductDetailsDialogOPen] =
    useState(false);

  const closeProductDetailsDialog = () => {
    setIsProductDetailsDialogOPen(false);
  };
  const openProductDetailsDialog = () => setIsProductDetailsDialogOPen(true);

  return (
    <>
      <div className="bg-[#F9C06A4A]   border border-[#F9C06A] rounded-md flex flex-col bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500">
        <div className="opacity-100 rounded-md">
          <img
            onClick={openProductDetailsDialog}
            loading="lazy"
            src={props.ProductDetails.imagePath}
            className="h-[222px] w-full opacity-100 rounded-md cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-4 ">
          <h2
            onClick={openProductDetailsDialog}
            className="py-3 font-bold text-center text-lg cursor-pointer"
          >
            {props.ProductDetails.productTitle}
          </h2>
          <p className="flex flex-row gap-x-2 justify-center items-center font-bold text-sm ">
            <span>{props.ProductDetails.productCombination.item1}</span>
            <span className="border border-black h-5"></span>
            <span>{props.ProductDetails.productCombination.item2}</span>
          </p>
          <p className="flex flex-row gap-x-2 justify-center items-center font-bold text-sm pb-4">
            {thousandSeparator(props.ProductDetails.productPrice)} تومان
          </p>
        </div>
        <ProductCartButton product={props.ProductDetails} />
      </div>
      {/* product Details Dialog */}
      <Transition appear show={isProductDetailsDialogOPen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeProductDetailsDialog}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-[700px]  transform overflow-hidden rounded-md bg-white p-6  align-middle shadow-xl transition-all">
                  <i
                    onClick={() => setIsProductDetailsDialogOPen(false)}
                    className="fa-regular fa-circle-xmark text-2xl text-left pb-2 cursor-pointer "
                  ></i>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        className="w-full rounded-md ali"
                        src={props.ProductDetails.imagePath}
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col gap-y-4 ">
                      <h2 className="py-3 font-bold text-right text-lg cursor-pointer">
                        {props.ProductDetails.productTitle}
                      </h2>
                      <p className=" text-justify text-sm leading-6">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز
                      </p>
                      <p>
                        <p className="text-right pb-3"> ترکیب ها:</p>
                        <p className="flex flex-row gap-x-2 items-center font-bold text-sm ">
                          <span>
                            {props.ProductDetails.productCombination.item1}
                          </span>
                          <span className="border border-black h-5"></span>
                          <span>
                            {props.ProductDetails.productCombination.item2}
                          </span>
                        </p>
                      </p>
                      <ProductCartButton product={props.ProductDetails} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* End product Details Dialog */}
    </>
  );
};
export default ProductCard;

import { thousandSeparator } from "../../utilities/thousand-separator";
import ProductCartButton from "../product-card-button/product-card-button";
import { ProductCardProps } from "./product-card.interface";

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  return (
    <>
      <div className="bg-[#F9C06A4A]   border border-[#F9C06A] rounded-md flex flex-col bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500">
        <div className="opacity-100 rounded-md">
          <img
            loading="lazy"
            src={props.ProductDetails.imagePath}
            className="h-[222px] w-full opacity-100 rounded-md"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-4 ">
          <h2 className="py-3 font-bold text-center text-lg">
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
    </>
  );
};
export default ProductCard;

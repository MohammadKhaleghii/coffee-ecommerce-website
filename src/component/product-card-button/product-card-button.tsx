import { ProductCardButtonProps } from "./product-card-button.interface";

const ProductCartButton: React.FC<ProductCardButtonProps> = (props: ProductCardButtonProps)=>{
    return (
        <div className="flex flex-row gap-x-2 justify-center items-center pb-2">
          <button className="rounded-full bg-[#F9C06A] px-4 py-2 w-fit border-none">
            افزودن به سبد خرید
          </button>
        </div>
    );
};
export default ProductCartButton;
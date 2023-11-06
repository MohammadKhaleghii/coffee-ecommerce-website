import { addToCart } from "../../store/reducre/cart/cart.reducer";
import { ProductCardButtonProps } from "./product-card-button.interface";
import { useDispatch } from "react-redux";

const ProductCartButton: React.FC<ProductCardButtonProps> = (
  props: ProductCardButtonProps
) => {
  const dispatch = useDispatch();
  const handleAddItemToCart = () => {
    dispatch(addToCart(props.product));
  };
  return (
    <div className="flex flex-row gap-x-2 justify-center items-center pb-2">
      <button
        onClick={handleAddItemToCart}
        className="rounded-full bg-[#F9C06A] px-4 py-2 w-fit border-none"
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
};
export default ProductCartButton;

import {
  addToCart,
  decreaseItemInTocart,
  removeFromCart,
} from "../../store/reducre/cart/cart.reducer";
import { thousandSeparator } from "../../utilities/thousand-separator";
import { CartItemProps } from "./cart-item.interface";
import { useDispatch } from "react-redux";

const CartItem: React.FC<CartItemProps> = ({
  imagePath,
  productBrand,
  productID,
  productPrice,
  productTitle,
  productQTY,
}: CartItemProps) => {
  const dispatch = useDispatch();
  const product = {
    imagePath,
    productBrand,
    productID,
    productPrice,
    productTitle,
    productQTY,
  };
  const handleDeleteproduct = () => {
    dispatch(removeFromCart(product));
  };

  const handleAddProduct = () => {
    dispatch(addToCart(product));
  };
  const handleDecreaseProductQTY = () => {
    dispatch(decreaseItemInTocart(product));
  };
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-24 mx-2">
          <img loading="lazy" className="h-24  w-24" src={imagePath} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{productTitle}</span>
          <span className="text-red-500 text-xs">{productBrand}</span>
          <button
            onClick={handleDeleteproduct}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs text-right"
          >
            حذف از سبد
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/5">
        <i onClick={handleAddProduct} className="fa-solid fa-plus text-sm"></i>

        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={productQTY.toString()}
        />

        <i
          onClick={handleDecreaseProductQTY}
          className="fa-solid fa-minus text-sm "
        ></i>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {thousandSeparator(productPrice)} تومان
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {thousandSeparator(productPrice * productQTY)} تومان
      </span>
    </div>
  );
};

export default CartItem;

CartItem.defaultProps = {
  imagePath: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
};

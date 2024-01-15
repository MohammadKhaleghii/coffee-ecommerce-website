import {addToCart} from "../../store/reducre/cart/cart.reducer";
import {ProductCardButtonProps} from "./product-card-button.interface";
import {useDispatch} from "react-redux";
import {Button} from "../../styles/component/buttons/button.styled.component";

const ProductCartButton: React.FC<ProductCardButtonProps> = (
  props: ProductCardButtonProps
) => {
  const dispatch = useDispatch();
  const handleAddItemToCart = () => {
    dispatch(addToCart(props.product));
  };
  return (
    <div className="flex flex-row gap-x-2 justify-center items-center pb-2">
      <Button width="" onClick={handleAddItemToCart} className="primary-button">
        افزودن به سبد خرید
      </Button>
    </div>
  );
};
export default ProductCartButton;

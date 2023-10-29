import ProductCard from "../../component/product-card/product-card";
import { productContainerProps } from "./product-container.interface";

const ProductContainer: React.FC<productContainerProps> = (
  props: productContainerProps
) => {
  return (
    <>
      <div className="lg:px-[130px] px-5">
        <h3 className="lg:text-2xl text-lg font-bold text-primary-30 pt-14 lg:pb-10 pb-5">
          {props.title}
        </h3>
        <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5 flex-row ">
          {props.productList.map((product, index) => (
            <ProductCard ProductDetails={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductContainer;

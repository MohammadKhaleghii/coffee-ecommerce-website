import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCartSkeleton = () => {
  const arrayItem = Array.from(Array(4).keys());
  return (
    <>
      <div className="pt-10 pb-10 w-full h-auto lg:px-[130px] px-5">
        <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5 flex-row ">
          {arrayItem.map((product, index) => (
            <div key={index} className="pt-2">
              <Skeleton className="h-[222px] " />
              <Skeleton className="mt-2" count={2} />
              <Skeleton className="mt-2" count={1} />
              <Skeleton className="mt-4" count={1} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductCartSkeleton;

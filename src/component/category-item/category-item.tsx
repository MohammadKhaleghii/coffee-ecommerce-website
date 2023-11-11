import { CategoryItemProps } from "./category-item.interface";

const CategoryItem: React.FC<CategoryItemProps> = (
  props: CategoryItemProps
) => {
  return (
    <div className="bg-gradient-to-r from-[#54372B] to-[#25181A] hover:bg-gradient-to-r hover:duration-100	  hover:from-[#664334] hover:to-[#25181A]  rounded-2xl flex flex-col items-center justify-center gap-y-3 py-10 hover:-translate-y-2">
      <div className="w-[107px] h-[107px] flex items-center justify-center">
        <img
          loading="lazy"
          src={props.categoryImage}
          alt=""
          className="min-w-max hover:scale-110 duration-100	"
        />
      </div>
      <h3 className="text-primary-20 font-bold ">{props.categoryTitle}</h3>
    </div>
  );
};

export default CategoryItem;

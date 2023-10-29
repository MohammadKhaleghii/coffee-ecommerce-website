import { CategoryItemProps } from "./category-item.interface";

const CategoryItem: React.FC<CategoryItemProps> = (
  props: CategoryItemProps
) => {
  return (
    <div className="bg-gradient-to-r from-[#54372B] to-[#25181A] rounded-2xl flex flex-col items-center justify-center gap-y-3 py-10 ">
      <img src={props.categoryImage} className="w-[107px] h-[107px]" alt="" />
      <h3 className="text-primary-20 font-bold ">{props.categoryTitle}</h3>
    </div>
  );
};

export default CategoryItem;

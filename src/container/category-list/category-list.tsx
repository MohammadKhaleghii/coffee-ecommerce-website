import {Link} from "react-router-dom";
import CategoryItem from "../../components/category-item/category-item";
import {CategoryListProps} from "./category-list.interface";

const CategoryList: React.FC<CategoryListProps> = (
  props: CategoryListProps
) => {
  return (
    <div className="lg:px-[130px] px-5">
      <h3 className="lg:text-2xl text-lg font-bold text-primary-30 pt-14 lg:pb-10 pb-5">
        {props.title}
      </h3>
      <div className="grid lg:grid-cols-5  grid-cols-2 gap-y-5 gap-x-5 flex-row ">
        {props.categoryList.map((categoryItem, index) => (
          <Link to={"/shop"}>
            <CategoryItem
              key={categoryItem.id}
              id={categoryItem.id}
              categoryImage={categoryItem.categoryImage}
              categoryTitle={categoryItem.categoryTitle}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

import { getCategories } from "@/services/categoryservice";
import { useState } from "react";
import CategoryItem from "@/components/CategoryItem";
import type { CategoryType } from "@/types/category";
import type { FoodType } from "@/types/food";
import { filterFoodsByCategory ,getFoods } from "@/services/foodservice";


type CategoryListProps = {
  setFoodList: React.Dispatch<React.SetStateAction<FoodType[]>>;
};

function CategoryList({setFoodList}: CategoryListProps ) {
  const [categoryList] = useState<CategoryType[]>(getCategories());
  const [activeCategory, setActiveCategory] = useState<string>("All");

    function handleFilterFoods (categoryName:string) {
    if (categoryName === "All") {
       setFoodList(getFoods());
      setActiveCategory("All");

      return
    }
    
     setFoodList(filterFoodsByCategory(categoryName));
    setActiveCategory(categoryName);
  }


  return (
    <div className="container mx-auto my-4 pb-8 px-4">
      <ul className=" flex flex-wrap gap-4 md:gap-8 justify-center">
        {categoryList.map((categoryItem) => (
          <CategoryItem
            key={categoryItem.Id}
            categoryItem={categoryItem}
            isActive={activeCategory === categoryItem.Title}
            handleIsActiveCategory={() =>
              handleFilterFoods(categoryItem.Title)
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;

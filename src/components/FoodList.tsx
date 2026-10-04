import FoodItem from "@/components/FoodItem";
import type { FoodType } from "@/types/food";


type FoodListProps = {
    foodList: FoodType[];
};

function FoodList({foodList}:FoodListProps) {

  return (
    <div className="container mx-auto px-4 mt-16 mb-4">
      <ul className=" grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[repeat(3,max-content)] xl:justify-center gap-x-4 gap-y-8 justify-items-center">
        {foodList.map((food) => (
            <FoodItem  key={food.Id} food={food}/>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;

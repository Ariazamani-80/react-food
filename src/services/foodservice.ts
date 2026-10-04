import foodList from "@/data/foods.json"
import { textFormat } from "@/utils/textFortmatter";

function getFoods() {
    return foodList
}

function filterFoodsByCategory(category: string) {
    return foodList.filter((food) => textFormat(food.Category) === textFormat(category));

}

export {getFoods, filterFoodsByCategory};
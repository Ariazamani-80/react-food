import Categorylist from "@/components/CategoryList"
import FoodList from "./components/FoodList"
import type { FoodType } from "./types/food";
import { useState } from "react";
import {getFoods} from "@/services/foodservice"

function App() {
  const [foodList, setFoodList] = useState<FoodType[]>(getFoods());

  return (
    <>
    <Categorylist setFoodList={setFoodList}/>
    <FoodList foodList={foodList}/>
    </>
  )
}

export default App

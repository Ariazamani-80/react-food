import type { FoodType } from "@/types/food";

type FoodTypeProps = {
  food: FoodType;
};

function FoodItem({ food }: FoodTypeProps) {
  const { Title, Category, Price, Calory, Image } = food;

  return (
    <li className="bg-white w-full max-w-95 md:max-w-100 overflow-hidden rounded-xl">
      <figure className="w-full aspect-4/3">
        <img
          className="block w-full h-full object-cover rounded-xl"
          src={Image}
          alt=""
        />
      </figure>

      <div className="p-4">
        <div className="mb-2">
          <span className="py-0.5 px-2 bg-gray-200 text-black font-bold rounded-xl text-xs ">
            {Category}
          </span>
        </div>

        <div className="mb-2">
          <h2 className="text-xl font-semibold text-gray-800">{Title}</h2>
        </div>

        <footer className="flex justify-between items-center">
          <p className="text-2xl font-bold text-gray-950">${Price}</p>
          <span className="text-[10px] text-white bg-lime-600 rounded-xl px-1.5 py-1.5">
            {Calory}Kcal
          </span>
        </footer>
      </div>
    </li>
  );
}

export default FoodItem;

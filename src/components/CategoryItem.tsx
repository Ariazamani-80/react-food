import type { CategoryType } from "@/types/category";

type CategoryItemProps = {
  categoryItem: CategoryType;
  isActive: boolean;
  handleIsActiveCategory: () => void;
};

function CategoryItem({
  categoryItem,
  isActive,
  handleIsActiveCategory,
}: CategoryItemProps) {
  return (
    <li>
      <button
        onClick={handleIsActiveCategory}
        className={`inline-block px-6 py-2 md:px-12 md:py-3 rounded-3xl bg-gray-200 cursor-pointer ${isActive ? "active" : ""}`}
      >
        {categoryItem.Title}
      </button>
    </li>
  );
}

export default CategoryItem;

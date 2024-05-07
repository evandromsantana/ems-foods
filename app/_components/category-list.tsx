import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="grid grid-cols-4 gap-3">
      {categories.map((category, index) => (
        <CategoryItem
          key={category.id}
          category={category}
          large={index === 0 || index === 1}
        />
      ))}
    </div>
  );
};

export default CategoryList;

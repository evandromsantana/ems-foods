import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="grid grid-cols-4 gap-3 px-2 py-2 md:flex  md:gap-4">
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

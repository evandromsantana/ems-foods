import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
  large?: boolean;
}

const CategoryItem = ({ category, large }: CategoryItemProps) => {
  return (
    <Link
      href={`/categories/${category.id}/products`}
      className={`${large ? "col-span-2" : ""} flex flex-col items-center justify-around rounded-md bg-[#F4F4F5] px-4 py-3`}
    >
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={40}
        width={40}
      />

      <span className="text-xs font-semibold">{category.name}</span>
    </Link>
  );
};

export default CategoryItem;

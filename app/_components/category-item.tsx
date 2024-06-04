import Link from "next/link";
import Image from "next/image";
import { Category } from "@prisma/client";

interface CategoryItemProps {
  category: Category;
  large?: boolean;
}

const CategoryItem = ({ category, large }: CategoryItemProps) => {
  return (
    <Link
      href={`/categories/${category.id}/products`}
      className={`${large ? "col-span-2" : ""} flex flex-col items-center justify-around rounded-md bg-[#F4F4F5] px-4 py-3 md:w-full md:flex-row md:justify-center md:gap-4`}
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

import Link from "next/link";
import Image from "next/image";
import { db } from "./_lib/prisma";
import Header from "./_components/header";
import Search from "./_components/search";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "./_components/ui/button";
import PromoBanner from "./_components/promo-banner";
import ProductList from "./_components/product-list";
import CategoryList from "./_components/category-list";
import RestaurantList from "./_components/restaurant-list";
import ButtonShopingCart from "./_components/ButtonShopingCart";

const fetch = async () => {
  const getProducts = db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  const getBurguersCategory = db.category.findFirst({
    where: {
      name: "Hambúrgueres",
    },
  });

  const getPizzasCategory = db.category.findFirst({
    where: {
      name: "Pizzas",
    },
  });

  const [products, burguersCategory, pizzasCategory] = await Promise.all([
    getProducts,
    getBurguersCategory,
    getPizzasCategory,
  ]);

  return { products, burguersCategory, pizzasCategory };
};

const Home = async () => {
  const { products, pizzasCategory, burguersCategory } = await fetch();

  return (
    <>
      <Header />
      <div className="flex-row items-center px-6 py-2 pt-5 md:flex md:h-[400px] md:bg-[#EA1D2C] md:py-2">
        <div className=" flex flex-row items-center justify-between  md:mt-5 md:w-full lg:gap-20 xl:gap-48 ">
          <div className="w-full flex-col justify-center md:mx-16 md:w-2/4">
            <h1 className="mb-4  hidden text-3xl font-extrabold text-white md:block lg:text-4xl xl:text-5xl">
              Está com fome?
            </h1>
            <p className="mb-2 mb-4 hidden text-sm text-muted-foreground text-white md:block">
              Com apenas alguns cliques, encontre refeições acessíveis perto de
              você.
            </p>

            <div className="flex h-0 w-full items-center justify-center rounded-md bg-white p-0 md:h-16 md:w-full md:p-6">
              <Search isHomePage={true} />
            </div>
          </div>

          <div className="hidden space-y-5 pr-0 md:flex lg:pr-28">
            <Image
              src="/pngwing.com.png"
              alt="Foods"
              height={370}
              width={370}
              className="object-cover "
            />
          </div>
        </div>
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="w-full px-5 pt-6 md:hidden">
        <Link href={`/categories/${pizzasCategory?.id}/products`}>
          <PromoBanner
            src="/promo-banner-01.png"
            alt="Até 30% de desconto em pizzas!"
          />
        </Link>
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>

          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
            asChild
          >
            <Link href="/products/recommended">
              Ver todos
              <ChevronRightIcon size={16} />
            </Link>
          </Button>
        </div>
        <ProductList products={products} />
      </div>

      <div className="flex justify-center px-5 pt-6 md:items-center md:justify-between md:gap-4 md:px-6">
        <>
          <Link href={`/categories/${pizzasCategory?.id}/products`}>
            <PromoBanner
              src="/promo-banner-01.png"
              alt="Até 30% de desconto em pizzas!"
              className="mt-4 hidden w-full sm:block md:mt-0"
            />
          </Link>

          <Link href={`/categories/${burguersCategory?.id}/products`}>
            <PromoBanner
              src="/promo-banner-02.png"
              alt="A partir de R$17,90 em lanches"
              className="w-full"
            />
          </Link>
        </>
      </div>

      <div className="space-y-4 py-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>

          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
            asChild
          >
            <Link href="/restaurants/recommended">
              Ver todos
              <ChevronRightIcon size={16} />
            </Link>
          </Button>
        </div>
        <RestaurantList />
      </div>

      {/* TODO: ver pedidos */}
      <ButtonShopingCart />
    </>
  );
};

export default Home;

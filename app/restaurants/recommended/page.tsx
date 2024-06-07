import Link from "next/link";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon } from "lucide-react";
import { authOptions } from "@/app/_lib/auth";
import { getServerSession } from "next-auth";

// components
import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import RestaurantItem from "@/app/_components/restaurant-item";

const RecommendedRestaurants = async () => {
  const session = await getServerSession(authOptions);
  const userFavoriteRestaurants = await db.userFavoriteRestaurant.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      restaurant: true,
    },
  });
  const restaurants = await db.restaurant.findMany({});

  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <div className="mb-6 inline-flex items-center  justify-center">
          <div className="hidden md:block">
            <Button
              className=" rounded-full 
            border border-solid border-muted-foreground bg-[#F4F4F4]  text-foreground shadow-sm"
              size="icon"
              asChild
            >
              <Link href="/">
                <ChevronLeftIcon />
              </Link>
            </Button>
          </div>

          <h2 className="pl-0 text-lg font-semibold md:pl-4 ">
            Restaurantes Recomendados
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {restaurants.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              userFavoriteRestaurants={userFavoriteRestaurants}
              className="min-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendedRestaurants;

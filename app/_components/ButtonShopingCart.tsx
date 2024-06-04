"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Cart from "./cart";
import { useState } from "react";

const ButtonShopingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4">
        <Button size={"icon"} onClick={() => setIsCartOpen(true)}>
          <ShoppingCart />
        </Button>
      </div>

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-[90vw]">
          <SheetHeader>
            <SheetTitle className="text-left">Sacola</SheetTitle>
          </SheetHeader>

          <Cart setIsOpen={setIsCartOpen} />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ButtonShopingCart;

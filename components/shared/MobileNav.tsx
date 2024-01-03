import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "./Icons";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Icons.menu className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-6 bg-white md:hidden"
          side="left"
        >
          <Icons.logo className="h-8 w-8" />
          <Separator className="border border-gray-50" />

          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;

import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuList,
} from "../ui/navigation-menu";

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link className="text-xl" href="/">
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link className="text-xl" href="/settings">
              Settings
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import cn from "clsx";
import { NavbarItemProps } from "@/components/ui/Navbar/NavbarItem.tsx";
import styles from "@/components/ui/Navbar/Navbar.module.scss";
import { isCategoriesPath } from "@/utils/isCategoriesPath.ts";

const NavbarItemWrapper: FC<
  Pick<NavbarItemProps, "isLink" | "children" | "route">
> = ({ isLink, route, children }) => {
  const { pathname } = useLocation();
  const isRouteActive = isCategoriesPath(pathname);
  return isLink ? (
    <NavLink
      to={route || ""}
      className={({ isActive }) => (isActive ? styles.active : "")}
    >
      {children}
    </NavLink>
  ) : (
    <div className={cn(isRouteActive && styles.active)}>{children}</div>
  );
};

export default NavbarItemWrapper;

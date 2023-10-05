import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from "react";
import cn from "clsx";
import { Typo } from "@/components/ui";
import NavbarItemWrapper from "@/components/ui/Navbar/NavbarItemWrapper.tsx";

export interface NavbarItemProps extends PropsWithChildren {
  title: string;
  icon?: ReactNode;
  route?: string;
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  isLink?: boolean;
}

const NavbarItem: FC<NavbarItemProps> = ({
  title,
  icon,
  route,
  setIsOpen,
  isOpen,
  children,
  isLink = true,
}) => {
  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <NavbarItemWrapper isLink={isLink} route={route}>
      <div
        role="presentation"
        className="flex justify-between pr-3"
        onClick={handleClick}
      >
        <Typo tag="h5" fw="bold" color="dark">
          {title}
        </Typo>

        {!!icon && (
          <div
            className={cn(
              "flex items-center justify-center transition-transform",
              isOpen && "-rotate-180"
            )}
          >
            {icon}
          </div>
        )}
      </div>

      <hr className="invisible mt-2 opacity-0" />

      {children}
    </NavbarItemWrapper>
  );
};

export default NavbarItem;

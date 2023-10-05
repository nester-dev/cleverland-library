import { FC } from "react";
import cn from "clsx";
import UserMenuButtons from "@/components/ui/UserMenu/UserMenuButtons.tsx";

interface Props {
  active: boolean;
}

const UserMenuDropdown: FC<Props> = ({ active }) => {
  return (
    <div
      className={cn(
        "pointer-events-none invisible absolute right-0 top-full z-30 flex w-full max-w-[270px] flex-col items-end gap-8 bg-white px-6 py-8 text-lg font-bold opacity-0 transition-all",
        active && "!pointer-events-auto !visible !opacity-100"
      )}
    >
      <UserMenuButtons />
    </div>
  );
};

export default UserMenuDropdown;

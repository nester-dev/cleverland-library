import { FC, useState } from "react";
import UserMenuDropdown from "@/components/ui/UserMenu/UserMenuDropdown.tsx";
import { Typo } from "@/components/ui";
import UserAvatar from "@/components/ui/User/UserAvatar.tsx";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser.ts";

const UserMenu: FC = () => {
  const { data } = useGetCurrentUser();
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <div
      className="relative hidden items-center gap-4 md:flex"
      onMouseEnter={() => setDropdownActive(true)}
      onMouseLeave={() => setDropdownActive(false)}
    >
      <Typo fw="semibold" className="text-sm">
        {`Привет, ${data?.firstName}!`}
      </Typo>

      <UserAvatar user={data} />

      <UserMenuDropdown active={dropdownActive} />
    </div>
  );
};

export default UserMenu;

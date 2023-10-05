import { FC } from "react";
import UserAvatar from "@/components/ui/User/UserAvatar.tsx";
import { Typo } from "@/components/ui";
import { IProfileProps } from "@/components/screens/Profile.tsx";

const UserInfo: FC<IProfileProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center gap-x-[30px] gap-y-6 sm:flex-row">
      <UserAvatar user={user} variant="large" editableAvatar />
      <Typo
        fw="medium"
        tag="h1"
        className="whitespace-pre text-center !text-2xl sm:text-start sm:!text-[32px] sm:!leading-[54px] lg:!text-[52px] lg:!leading-[64px]"
      >{`${user?.lastName}\n${user?.firstName}`}</Typo>
    </div>
  );
};

export default UserInfo;

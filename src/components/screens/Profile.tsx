import { FC } from "react";
import { Container } from "@/components/layout";
import UserInfo from "@/components/ui/User/UserInfo.tsx";
import UserPersonalData from "@/components/ui/User/UserPersonalData/UserPersonalData.tsx";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser.ts";
import { IUser } from "@/shared/types/user.interface.ts";
import { Loader } from "@/components/ui";
import { useUpdateUser } from "@/hooks/useUpdateUser.ts";

export interface IProfileProps {
  user?: IUser;
}

const Profile: FC = () => {
  const { data, isLoading } = useGetCurrentUser();
  const { isLoading: isUserUpdating, isIdle } = useUpdateUser();
  return (
    <>
      {isLoading || (isUserUpdating && !isIdle) ? (
        <Loader />
      ) : (
        <Container>
          <div className="flex flex-col gap-[92px] py-[42px] md:pb-[62px] md:pt-[47px]">
            <UserInfo user={data} />

            <UserPersonalData user={data} />
          </div>
        </Container>
      )}
    </>
  );
};

export default Profile;

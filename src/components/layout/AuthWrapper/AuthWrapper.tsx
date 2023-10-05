import { FC } from "react";
import { Outlet } from "react-router";
import { Typo } from "@/components/ui";

const AuthWrapper: FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-3 bg-mainGradient px-4 md:gap-[59px]">
      <Typo tag="h3" color="white" center>
        Cleverland
      </Typo>
      <Outlet />
    </div>
  );
};

export default AuthWrapper;

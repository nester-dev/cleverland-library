import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";

const HeaderLogo: FC = () => {
  return (
    <div className="hidden lg:block lg:w-[285px]">
      <Link to="/">
        <Logo className="inline-block" />
      </Link>
    </div>
  );
};

export default HeaderLogo;

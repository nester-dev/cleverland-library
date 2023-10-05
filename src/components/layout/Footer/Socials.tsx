import { FC } from "react";
import { Link } from "react-router-dom";
import { socialData } from "@/components/layout/Footer/socials.data.tsx";

const Socials: FC = () => {
  return (
    <ul className="flex items-center gap-6">
      {socialData.map(social => (
        <li
          key={social.id}
          className="flex h-6 w-6 items-center justify-center"
        >
          <Link to="/">
            <social.icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;

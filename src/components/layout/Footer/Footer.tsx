import { FC } from "react";
import { Typo } from "@/components/ui";
import Socials from "@/components/layout/Footer/Socials.tsx";
import { Container } from "@/components/layout";

const Footer: FC = () => {
  return (
    <Container>
      <footer className="flex flex-col flex-wrap items-center justify-center gap-4 border-t border-t-gray-700 py-4 text-center text-[15px] md:flex-row md:justify-between md:text-base">
        <Typo>© 2020-2023 Cleverland. Все права защищены.</Typo>
        <Socials />
      </footer>
    </Container>
  );
};

export default Footer;

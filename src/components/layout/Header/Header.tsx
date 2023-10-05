import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import cn from "clsx";
import HeaderLogo from "@/components/layout/Header/HeaderLogo.tsx";
import { Burger, ResponseMessage, Typo, UserMenu } from "@/components/ui";
import { Container } from "@/components/layout";
import { useMainStore } from "@/store/mainStore.ts";
import { Routes } from "@/shared/constants.ts";

const Header: FC = () => {
  const responseMessage = useMainStore(state => state.responseMessage);

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const headerTitle =
    location.pathname === Routes.PROFILE ? "Личный кабинет" : "Библиотека";

  const scrollListener = useCallback(() => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    scrollListener();
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [scrollListener]);

  return (
    <header
      className={cn(
        "fixed z-[50] w-full bg-white py-6 transition-all md:pb-[22px] md:pt-8 lg:pb-[15px] lg:pt-8",
        scrolled && "shadow-header"
      )}
    >
      <Container>
        <div className="relative flex w-full items-center">
          {responseMessage && <ResponseMessage />}
          <HeaderLogo />

          <Burger />

          <Typo tag="h3" color="dark" className="tracking-wide mr-auto">
            {headerTitle}
          </Typo>
          <UserMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;

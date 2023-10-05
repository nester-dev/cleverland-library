import { FC, PropsWithChildren } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery.ts";
import { Aside, Container } from "@/components/layout";

const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  const aboveLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <Container>
      <div className="flex w-full gap-1.5 pb-[62px] pt-2 md:pt-8 lg:py-[62px]">
        {aboveLaptop && <Aside />}
        {children}
      </div>
    </Container>
  );
};

export default ContentWrapper;

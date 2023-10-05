import { FC } from "react";
import { ContentWrapper } from "@/components/layout";
import { BookList, GridControls, SearchBar, Sorting } from "@/components/ui";

const MainPageContent: FC = () => {
  return (
    <ContentWrapper>
      <section className="flex w-full flex-col gap-4 md:gap-6 lg:gap-8">
        <div className="relative flex w-full gap-4">
          <SearchBar />
          <Sorting />
          <GridControls />
        </div>

        <BookList />
      </section>
    </ContentWrapper>
  );
};

export default MainPageContent;

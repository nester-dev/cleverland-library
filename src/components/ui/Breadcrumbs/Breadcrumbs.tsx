import { FC } from "react";
import { Link } from "react-router-dom";
import { Typo } from "@/components/ui";
import { Container } from "@/components/layout";
import { ReactComponent as Slash } from "@/assets/icons/slash.svg";
import { ICategory } from "@/shared/types/book.interface.ts";

interface BreadcrumbsProps {
  category?: ICategory;
  title?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title, category }) => {
  return (
    <div className="bg-gray-400 py-5">
      <Container>
        <Typo className="items-center text-xs md:text-sm" color="gray-500">
          <Link
            to={`/category/${category?.path}`}
            className="after:duration-400 relative my-1 whitespace-nowrap after:absolute after:left-0 after:top-full after:h-px after:w-full after:bg-transparent after:transition-all hover:after:bg-gray-500"
          >
            {category?.name}
          </Link>
          <Slash className="mx-1 inline-block h-4 w-4 md:h-6 md:w-6" />
          <span className="break-words">{title}</span>
        </Typo>
      </Container>
    </div>
  );
};

export default Breadcrumbs;

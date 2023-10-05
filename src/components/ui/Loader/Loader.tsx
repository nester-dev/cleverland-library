import { FC, useEffect } from "react";
import Lottie from "lottie-react";
import cn from "clsx";
import loader from "@/assets/loader.json";
import { hideDocumentScroll } from "@/utils/hideScroll.ts";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  useEffect(() => {
    hideDocumentScroll(true);

    return () => {
      hideDocumentScroll(false);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-dark/30 backdrop-blur-[30px] backdrop-filter",
        className
      )}
    >
      <Lottie animationData={loader} loop className="h-[250px] w-[250px]" />
    </div>
  );
};

export default Loader;

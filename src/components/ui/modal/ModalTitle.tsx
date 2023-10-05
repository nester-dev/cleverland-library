import { FC } from "react";
import { Typo } from "@/components/ui";
import { ModalProps } from "@/components/ui/modal/ModalWrapper.tsx";

const ModalTitle: FC<Pick<ModalProps, "title">> = ({ title }) => {
  return (
    <Typo fw="bold" className="max-w-[350px] text-center !text-lg sm:!text-2xl">
      {title}
    </Typo>
  );
};

export default ModalTitle;

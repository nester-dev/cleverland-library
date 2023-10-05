import { Dispatch, FC, SetStateAction } from "react";
import { ReactComponent as CloseIcon } from "@/assets/icons/close.svg";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalCloseButton: FC<Props> = ({ setOpen }: Props) => {
  return (
    <button
      type="button"
      className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 sm:right-8 sm:top-8"
      onClick={() => setOpen(false)}
    >
      <CloseIcon className="fill-orange" />
    </button>
  );
};

export default ModalCloseButton;

import { FC, PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "@/components/ui";

interface FormWrapperProps extends PropsWithChildren {
  submit: (e?: React.BaseSyntheticEvent | undefined) => Promise<void>;
  isLoading: boolean;
}

const FormWrapper: FC<FormWrapperProps> = ({ children, submit, isLoading }) => {
  return (
    <>
      {isLoading && <Loader />}
      <form
        onSubmit={submit}
        className="w-full max-w-[528px] rounded-2xl bg-white px-4 py-6 sm:px-14 sm:py-12"
      >
        <AnimatePresence>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col gap-8"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </form>
    </>
  );
};

export default FormWrapper;

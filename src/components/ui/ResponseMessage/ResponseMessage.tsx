import { FC, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "clsx";
import { ReactComponent as Warning } from "@/assets/icons/WarningCircle.svg";
import { ReactComponent as Check } from "@/assets/icons/CheckCircle.svg";
import { ReactComponent as Close } from "@/assets/icons/close.svg";
import { Typo } from "@/components/ui";
import { useMainStore } from "@/store/mainStore.ts";
import { ResponseMessages } from "@/shared/constants.ts";

const ResponseMessage: FC = () => {
  const [message, setMessage] = useMainStore(state => [
    state.responseMessage,
    state.setResponseMessage,
  ]);

  const isError = useMemo(
    () =>
      message &&
      [
        ResponseMessages.BOOKING_CHANGE_ERROR,
        ResponseMessages.ERROR,
        ResponseMessages.BOOKING_CANCEL_ERROR,
        ResponseMessages.AVATAR_UPDATE_ERROR,
        ResponseMessages.PROFILE_UPDATE_ERROR,
      ].includes(message),
    [message]
  );

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMessage(null);
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 4,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className={cn(
          "absolute top-16 z-30 flex w-full items-center gap-4 rounded-md border px-8 py-6",
          !isError && "border-positive bg-green",
          isError && "border-error bg-negative"
        )}
      >
        <div className="h-6 w-6 lg:h-8 lg:w-8">
          {isError ? <Warning /> : <Check />}
        </div>
        <Typo fw="semibold" className="ml-2 flex-grow">
          {message}
        </Typo>
        <button type="button" onClick={() => setMessage(null)}>
          <Close className="fill-dark" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResponseMessage;

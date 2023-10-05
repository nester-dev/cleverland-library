import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hideDocumentScroll } from "@/utils/hideScroll.ts";
import ModalCloseButton from "@/components/ui/modal/ModalCloseButton.tsx";
import { useMainStore } from "@/store/mainStore.ts";
import { useClickOutside } from "@/hooks/useClickOutside.ts";
import ModalTitle from "@/components/ui/modal/ModalTitle.tsx";

export interface ModalProps extends PropsWithChildren {
  title?: string;
}

const ModalWrapper: FC<ModalProps> = ({ title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const setActiveModal = useMainStore(state => state.setActiveModal);
  const [open, setOpen] = useState(true);
  useClickOutside(modalRef, () => setOpen(false));

  useEffect(() => {
    hideDocumentScroll(true);
  }, []);

  const handleAnimation = () => {
    if (!open) {
      hideDocumentScroll(false);
      setActiveModal(null);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        animate={open ? { opacity: 1 } : { opacity: 0 }}
        initial={{ opacity: 0.1 }}
        transition={{ duration: 0.4 }}
        onAnimationComplete={handleAnimation}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/30 px-[16px] backdrop-blur-[30px] backdrop-filter"
      >
        <motion.div
          animate={open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 }}
          initial={{ opacity: 0.1, scale: 0.5 }}
          transition={{ duration: 0.4 }}
          ref={modalRef}
          className="relative flex w-full max-w-[600px] flex-col items-center gap-6 rounded-2xl bg-white px-8 py-12 md:gap-8"
        >
          <ModalTitle title={title} />
          <ModalCloseButton setOpen={setOpen} />
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalWrapper;

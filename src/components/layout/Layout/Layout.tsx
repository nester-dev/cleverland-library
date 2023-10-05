import { FC } from "react";
import { Outlet } from "react-router";
import { Footer, Header } from "@/components/layout";
import { useMainStore } from "@/store/mainStore.ts";
import { ModalTypes } from "@/components/ui/modal/types.ts";
import { DateModal } from "@/components/ui";
import RateModal from "@/components/ui/modal/RateModal.tsx";

const Layout: FC = () => {
  const activeModal = useMainStore(state => state.activeModal);
  return (
    <div className="wrapper">
      {activeModal &&
        [ModalTypes.DATE, ModalTypes.CHANGE_DATE].includes(activeModal) && (
          <DateModal type={activeModal} />
        )}
      {activeModal === ModalTypes.RATE && <RateModal />}

      <Header />
      <main className="pt-20 md:pt-[105px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

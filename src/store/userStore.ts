import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { UserStore } from "@/store/types.ts";
import { IUser } from "@/shared/types/user.interface.ts";

export const useUserStore = create<UserStore>()(
  immer(set => ({
    user: null,
    setUser: (user: IUser) => set({ user }),
  }))
);

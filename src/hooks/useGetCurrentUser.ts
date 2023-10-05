import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/services/user.service.ts";
import { useUserStore } from "@/store/userStore.ts";

export const useGetCurrentUser = () => {
  const setUser = useUserStore(state => state.setUser);
  const response = useQuery(
    ["get current user"],
    () => UserService.getCurrentUser(),
    {
      select: ({ data }) => data,
    }
  );

  if (response.data) {
    setUser(response.data);
  }

  return response;
};

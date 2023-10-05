import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@/services/user.service.ts";
import { ResponseMessages } from "@/shared/constants.ts";
import { useMainStore } from "@/store/mainStore.ts";

export const useUpdateUser = (
  successMessage?: ResponseMessages,
  errorMessage?: ResponseMessages
) => {
  const queryCache = useQueryClient();
  const setResponseMessage = useMainStore(state => state.setResponseMessage);
  return useMutation(["update user"], UserService.updateUser, {
    onSuccess: () => {
      queryCache.invalidateQueries(["get current user"]);
      setResponseMessage(successMessage);
    },

    onError: () => {
      setResponseMessage(errorMessage);
    },
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@/services/user.service.ts";
import { useMainStore } from "@/store/mainStore.ts";
import { ResponseMessages } from "@/shared/constants.ts";

export const useUpdateAvatar = (
  successMessage?: ResponseMessages,
  errorMessage?: ResponseMessages
) => {
  const queryCache = useQueryClient();
  const setResponseMessage = useMainStore(state => state.setResponseMessage);

  return useMutation(["upload avatar"], UserService.uploadAvatar, {
    onSuccess: () => {
      queryCache.invalidateQueries(["get current user"]);
      setResponseMessage(successMessage);
    },

    onError: () => {
      setResponseMessage(errorMessage);
    },
  });
};

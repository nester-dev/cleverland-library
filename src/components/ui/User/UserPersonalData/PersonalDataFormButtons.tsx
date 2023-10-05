import { FC, useEffect } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui";
import { RegisterFormFields } from "@/components/ui/form/types.ts";
import { useUpdateUser } from "@/hooks/useUpdateUser.ts";
import { ResponseMessages } from "@/shared/constants.ts";
import { DEFAULT_PASSWORD_PATTERN } from "@/components/ui/form/patterns.ts";
import { useUserStore } from "@/store/userStore.ts";

interface Props {
  isEditing: boolean;
  onClick: () => void;
}

const PersonalDataFormButtons: FC<Props> = ({ isEditing, onClick }) => {
  const user = useUserStore(state => state.user);
  const { reset, formState, handleSubmit } =
    useFormContext<RegisterFormFields>();
  const { mutate, isSuccess } = useUpdateUser(
    ResponseMessages.AVATAR_UPDATE_SUCCESS,
    ResponseMessages.PROFILE_UPDATE_ERROR
  );

  useEffect(() => {
    if (isSuccess) {
      onClick();
    }
  }, [isSuccess]);

  const onSubmit: SubmitHandler<RegisterFormFields> = data => {
    const dataToUpdate = data;
    if (
      dataToUpdate?.password &&
      DEFAULT_PASSWORD_PATTERN.test(dataToUpdate?.password)
    ) {
      delete dataToUpdate.password;
    }

    mutate({ userId: String(user?.id), data: dataToUpdate });
  };

  const handleClick = () => {
    if (isEditing) {
      reset();
    }
    onClick();
  };

  return (
    <div className="flex flex-col gap-[30px] gap-y-4 md:flex-row">
      <Button
        size="large"
        variant="outlined"
        className="w-full md:max-w-[255px]"
        onClick={handleClick}
      >
        {isEditing ? "Отменить" : "Редактировать"}
      </Button>
      <Button
        size="large"
        variant="filled"
        disabled={!formState.isDirty || !isEditing}
        className="w-full md:max-w-[255px]"
        onClick={handleSubmit(onSubmit)}
      >
        Сохранить изменения
      </Button>
    </div>
  );
};

export default PersonalDataFormButtons;

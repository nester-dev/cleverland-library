import { ChangeEvent, FC, useRef } from "react";
import cn from "clsx";
import { ReactComponent as AvatarPlaceholderSmall } from "@/assets/icons/avatar-placeholder-small.svg";
import { ReactComponent as AvatarPlaceholderBig } from "@/assets/icons/avatar-placeholder-big.svg";
import { ReactComponent as AddPhoto } from "@/assets/icons/add-photo.svg";
import { IUser } from "@/shared/types/user.interface.ts";
import { ResponseMessages } from "@/shared/constants.ts";
import { useUpdateAvatar } from "@/hooks/useUpdateAvatar.ts";

interface Props {
  user?: IUser | null;
  variant?: "small" | "large";
  editableAvatar?: boolean;
}

const UserAvatar: FC<Props> = ({
  user,
  variant = "small",
  editableAvatar = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate } = useUpdateAvatar(
    ResponseMessages.AVATAR_UPDATE_SUCCESS,
    ResponseMessages.AVATAR_UPDATE_ERROR
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const formData = new FormData();
      formData.append("files", event.target.files[0]);
      mutate({ userId: user?.id, data: formData });
      event.target.value = "";
    }
  };

  return (
    <button
      type="button"
      className={cn(
        "relative h-[58px] w-[58px] overflow-hidden rounded-full object-cover object-center shadow-avatarPlaceholder",
        variant === "large" && "!h-40 !w-40"
      )}
      onClick={() => editableAvatar && inputRef.current?.click()}
    >
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleChange}
      />

      {user?.avatar ? (
        <img
          className="h-full w-full object-cover object-center md:block"
          src={user?.avatar}
          alt="avatar"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full">
          {variant === "small" ? (
            <AvatarPlaceholderSmall />
          ) : (
            <AvatarPlaceholderBig />
          )}
        </div>
      )}

      {editableAvatar && (
        <div className="absolute bottom-0 flex h-[42px] w-full items-center justify-center bg-dark/70">
          <AddPhoto />
        </div>
      )}
    </button>
  );
};

export default UserAvatar;

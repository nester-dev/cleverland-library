/* eslint-disable import/no-duplicates */
import { FC } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Typo } from "@/components/ui";
import { FeedbackItemProps } from "@/components/ui/Book/BookDetails/BookFeedback/FeedbackItem.tsx";
import { ReactComponent as NoAvatar } from "@/assets/icons/no-avatar.svg";

const FeedbackFrom: FC<FeedbackItemProps> = ({ feedback }) => {
  const { user, createdAt } = feedback;
  return (
    <div className="flex items-center gap-6 text-gray-600">
      <div className="h-8 w-8 overflow-hidden rounded-full">
        {user?.avatarUrl ? (
          <img
            className="h-full w-full"
            src={user.avatarUrl}
            alt={user.lastName}
          />
        ) : (
          <NoAvatar />
        )}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-[3px] text-[15px] sm:text-base">
        <Typo>{`${user?.firstName} ${user?.lastName}`}</Typo>

        <Typo>
          {format(new Date(createdAt), "d MMMM yyyy", { locale: ru })}
        </Typo>
      </div>
    </div>
  );
};

export default FeedbackFrom;

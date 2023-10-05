import { FC } from "react";
import cn from "clsx";
import { ReactComponent as StarOutline } from "@/assets/icons/Icon_star.svg";
import { Typo } from "@/components/ui";
import { GridType } from "@/components/ui/GridControls/types.ts";
import { useMainStore } from "@/store/mainStore.ts";

interface RatingProps {
  rating?: number;
  showDigits?: boolean;
  className?: string;
}

const Rating: FC<RatingProps> = ({ rating, showDigits, className }) => {
  const gridType = useMainStore(state => state.gridType);

  const isRow = gridType === GridType.row;
  const stars = Math.floor(Number(rating));
  return (
    <div
      className={cn(
        isRow && "order-2 mr-auto flex-grow",
        "flex items-center gap-6"
      )}
    >
      <div>
        {stars ? (
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map(elem => {
              if (stars >= elem) {
                return (
                  <StarOutline
                    key={elem}
                    className={cn(className, "h-4 w-4 fill-gold sm:h-6 sm:w-6")}
                  />
                );
              }
              return (
                <StarOutline
                  key={elem}
                  className={cn(className, "h-4 w-4 sm:h-6 sm:w-6")}
                />
              );
            })}
          </div>
        ) : (
          <Typo color="gray-500" className="text-sm">
            ещё нет оценок
          </Typo>
        )}
      </div>
      {showDigits && <Typo tag="h5">{rating}</Typo>}
    </div>
  );
};

export default Rating;

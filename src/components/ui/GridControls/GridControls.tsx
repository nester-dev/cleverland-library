import { FC } from "react";
import GridControlButton from "@/components/ui/GridControls/GridControlButton.tsx";
import { controlsData } from "@/components/ui/GridControls/controls.data.tsx";
import { useMainStore } from "@/store/mainStore.ts";

const GridControls: FC = () => {
  const [gridType, setGridType] = useMainStore(state => [
    state.gridType,
    state.setGridType,
  ]);

  return (
    <div className="flex gap-4">
      {controlsData.map(elem => (
        <GridControlButton
          key={elem.id}
          isActive={elem.id === gridType}
          onClick={() => setGridType(elem.id)}
        >
          <elem.icon
            className={elem.id === gridType ? "fill-white" : "fill-gray-500"}
          />
        </GridControlButton>
      ))}
    </div>
  );
};

export default GridControls;

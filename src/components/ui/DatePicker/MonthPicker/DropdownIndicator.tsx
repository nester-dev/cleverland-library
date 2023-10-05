import { FC } from "react";
import { components, DropdownIndicatorProps } from "react-select";
import { ReactComponent as CustomIndicator } from "@/assets/icons/select-dropdown.svg";

const DropdownIndicator: FC<DropdownIndicatorProps> = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CustomIndicator />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;

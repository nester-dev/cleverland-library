import { FC, PropsWithChildren } from "react";
import cn from "clsx";
import styles from "./Container.module.scss";

interface ContainerProps extends PropsWithChildren {
  fullWidth?: boolean;
}

const Container: FC<ContainerProps> = ({ children, fullWidth }) => {
  return (
    <div className={cn(styles.container, fullWidth && "w-full")}>
      {children}
    </div>
  );
};

export default Container;

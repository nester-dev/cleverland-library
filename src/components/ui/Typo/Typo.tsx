import { FC, PropsWithChildren, useMemo } from "react";
import cn from "clsx";
import {
  VariantTypo,
  VariantTypoColors,
  VariantTypoFontWeight,
  VariantTypoTags,
} from "./types.ts";
import { getTypoClasses } from "./helper.ts";

export interface TypoProps extends PropsWithChildren {
  tag?: VariantTypoTags;
  variant?: VariantTypo;
  uppercase?: boolean;
  center?: boolean;
  className?: string;
  fw?: VariantTypoFontWeight;
  color?: VariantTypoColors;
  htmlFor?: string;
}

const Typo: FC<TypoProps> = ({
  tag = "p",
  children,
  fw,
  center,
  className,
  uppercase,
  color,
  variant,
  htmlFor,
}) => {
  const Tag = useMemo(() => tag, [tag]);
  const classes = useMemo(
    () =>
      cn(
        getTypoClasses({
          tag,
          center,
          className,
          uppercase,
          fw,
          color,
          variant,
        })
      ),
    [tag, center, className, fw, uppercase, color, variant]
  );
  return (
    <Tag className={classes} htmlFor={htmlFor}>
      {children}
    </Tag>
  );
};

export default Typo;

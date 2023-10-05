import { FontColors, FontWeight } from "@/components/ui/Typo/types.ts";
import { TypoProps } from "./Typo.tsx";

const tagClasses = {
  h1: "text-[52px] leading-[64px]",
  h2: "text-[44px] leading-[54px]",
  h3: "text-lg md:text-[32px] md:leading-10 font-bold",
  h4: "text-2xl leading-[30px] font-bold",
  h5: "text-lg leading-7 font-bold",
  label: "text-sm",
  p: "",
};

const variantClasses = {
  titleLarge: "text-base",
};

export const getTypoClasses = ({
  tag,
  center,
  uppercase,
  className,
  fw,
  color,
  variant,
}: TypoProps) => {
  return [
    tag && tagClasses[tag],
    variant && variantClasses[variant],
    fw && FontWeight[fw],
    uppercase && "uppercase",
    center && "text-center",
    color && FontColors[color],
    className,
  ];
};

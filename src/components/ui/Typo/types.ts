export type VariantTypoTags = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "label";

export type VariantTypo = "titleLarge";

export enum FontWeight {
  "regular" = "font-normal",
  "medium" = "font-medium",
  "semibold" = "font-semibold",
  "bold" = "font-bold",
}

export enum FontColors {
  "dark" = "text-dark",
  "dark-300" = "text-dark-300",
  "white" = "text-white",
  "black" = "text-black",
  "gray-500" = "text-gray-500",
  "gray-600" = "text-gray-600",
  "error" = "text-error",
}

export type VariantTypoFontWeight = keyof typeof FontWeight;

export type VariantTypoColors = keyof typeof FontColors;

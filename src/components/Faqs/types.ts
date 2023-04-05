export interface QuestionProp {
  name: string;
  description: string | JSX.Element;
}
export const variants = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Variant = typeof variants[keyof typeof variants];

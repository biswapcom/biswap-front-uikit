export const tags = {
  P: "p",
  SPAN: "span",
  DIV: "div",
};
export const scales = {
  SIZE20: "size20",
  SIZE16: "size16",
  SIZE14: "size14",
  SIZE12: "size12",
} as const;

export type Tags = typeof tags[keyof typeof tags];
export type Scales = typeof scales[keyof typeof scales];

export interface BodyTextProps {
  as?: Tags;
  scale?: Scales;
  nowrap?: boolean;
}

export const tags = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  P: "p",
  SPAN: 'span',
  DIV: 'div',
};

export const scales = {
  SIZE40: "size40",
  SIZE32: "size32",
  SIZE24: "size24",
  SIZE20: "size20",
  SIZE16: "size16",
  SIZE14: "size14",
  SIZE12: "size12",
  SIZE10: "size10",
} as const;

export type Tags = typeof tags[keyof typeof tags];
export type Scales = typeof scales[keyof typeof scales];

export interface HeadTextProps {
  as?: Tags;
  scale?: Scales;
  nowrap?: boolean;
}
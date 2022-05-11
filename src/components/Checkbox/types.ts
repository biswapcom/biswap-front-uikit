export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface CheckboxProps {
  scale?: Scales;
  labelOrientation?: string;
  label?: string;
  colorVariant?: string
  id?: string
  defaultChecked?: boolean
}

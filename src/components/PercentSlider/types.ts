import { BoxProps } from "../Box";

export default interface SliderProps extends BoxProps {
  name: string;
  min?: number;
  max?: number;
  value: number;
  onValueChanged: (newValue: number) => void;
  disabled?: boolean;
  enableShortcuts?: boolean;
  shortcutCheckpoints?: Array<number>
}

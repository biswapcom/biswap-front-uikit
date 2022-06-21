export interface BadgeProps {
  badgeType:
    | "success"
    | "error"
    | "active"
    | "notActive"
    | "primary"
    | "warning"
    | "core"
    | "finished"
    | string;
  fontSize?: string;
  fontWeight?: string;
  isIcon?: string;
  isLarge?: boolean;
}

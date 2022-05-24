export interface BadgeProps {
  badgeType: "success" | "error" | "active" | "notActive" | "primary" | "warning" | "core" | string;
  fontSize?: string;
  fontWeight?: string;
  isIcon?: string;
  isLarge?: boolean
}

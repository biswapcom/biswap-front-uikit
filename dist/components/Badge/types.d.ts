export interface BadgeProps {
    badgeType: "success" | "error" | "active" | "notActive" | "primary" | "warning" | "core" | "light" | string;
    fontSize?: string;
    fontWeight?: string;
    isIcon?: string;
    isLarge?: boolean;
}

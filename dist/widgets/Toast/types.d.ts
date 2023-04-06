import { ColoredVariants } from "../../components/Alert";
export declare const types: {
    SUCCESS: string;
    DANGER: string;
    WARNING: string;
    INFO: string;
};
export declare type Types = typeof types[keyof typeof types];
export interface Toast {
    id: string;
    type: Types;
    title: string;
    description?: any;
    telegramDescription?: string;
    tweeterDescription?: string;
    hash?: string;
    url?: string;
    withGift?: boolean;
}
export interface ColoredToastProps {
    id: string;
    type: ColoredVariants;
    title: string;
}
export interface ToastContainerProps {
    toasts: Toast[];
    stackSpacing?: number;
    ttl?: number;
    onRemove: (id: string) => void;
    clearAll?: () => void | undefined;
    clearAllLabel?: string;
    viewBscScanLabel?: string;
}
export declare type ColoredToastContainerProps = Pick<ToastContainerProps, "ttl" | "onRemove">;
export interface ToastProps {
    toast: Toast;
    onRemove?: ToastContainerProps["onRemove"];
    ttl?: number;
    style: Partial<CSSStyleDeclaration>;
    handleMouseEnter?: any;
    handleMouseLeave?: any;
    handleRemove?: any;
    progress?: number;
    clearAll?: () => void | undefined;
    zIndex?: string;
    removeButtonPosition?: number;
    clearAllLabel: string;
    viewBscScanLabel: string;
}

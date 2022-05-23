import { DropdownMenuItems } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";
export declare const status: {
    LIVE: LinkStatus;
    SOON: LinkStatus;
    NEW: LinkStatus;
};
export declare const links: MenuItemsType[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        channel: {
            icon: string;
            label: string;
            href: string;
        };
        chats: {
            icon: string;
            label: string;
            href: string;
        }[];
    };
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const BSWPriceLabel = "BSW";
export declare const BSWPriceValue = 1234.947;
export declare const footerStatistic: {
    label: string;
    value: number;
}[];
export declare const aboutLinks: {
    label: string;
    href: string;
}[];
export declare const productLinks: {
    label: string;
    href: string;
}[];
export declare const serviceLinks: {
    label: string;
    href: string;
}[];
export declare const userMenulinks: DropdownMenuItems[];
export declare const MENU_HEIGHT = 72;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const MOBILE_MENU_HEIGHT = 44;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
export declare const TOP_BANNER_HEIGHT = 70;
export declare const TOP_BANNER_HEIGHT_MOBILE = 84;
export declare const MOBILE_EVENT_BUTTON_HEIGHT = 40;
export declare const FISHING_BANNER_HEIGHT = 40;

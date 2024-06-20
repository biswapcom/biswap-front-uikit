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
export declare const socialLinks: {
    title: string;
    links: any[];
};
export declare const aboutLinks: {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
};
export declare const productLinks: {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
};
export declare const serviceLinks: {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
};
export declare const userMenulinks: DropdownMenuItems[];
export declare const MENU_HEIGHT = 72;
export declare const TOP_BANNER_HEIGHT = 70;
export declare const TOP_BANNER_HEIGHT_MOBILE = 84;
export declare const MOBILE_EVENT_BUTTON_HEIGHT = 40;
export declare const TRANSFER_BLOCK_CLOSED_HEIGHT = 40;
export declare const TRANSFER_BLOCK_OPENED_HEIGHT = 156;

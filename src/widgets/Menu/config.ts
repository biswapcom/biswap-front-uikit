import { noop } from "lodash";
import {
  DropdownMenuItems,
  DropdownMenuItemType,
} from "../../components/DropdownMenu/types";
import { MenuItemsType, MenuItemType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

const getBanner = () => "<div>BANNER</div>";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: "Trade",
    href: "/swap",
    items: [
      {
        label: "Swap",
        href: "/swap",
        leftIcon: "Swap",
        description: "Item description",
      },
      {
        label: "Expert Trade",
        leftIcon: "ExpertTrade",
        // rightIcon: "ArrowUpForward",
        rightIconFill: "primary",
        description: "Item description",
        href: "/liquidity",
      },
      {
        label: "Liquidity",
        href: "/pool",
        leftIcon: "Liquidity",
        description: "Item description",
      },
    ],
  },
  {
    label: "Earn",
    href: "/earn",
    items: [
      {
        label: "Farms",
        href: "/pool",
        leftIcon: "Farms",
        description: "Item description",
      },
      {
        label: "LaunchPools",
        href: "/pool",
        leftIcon: "Launch",
        description: "Item description",
        type: DropdownMenuItemType.CONTAINER,
        links: [
          {
            label: "Stake BSW",
            href: "/polar",
          },
          {
            label: "Stake tokens",
            href: "/polar",
          },
        ],
      },
      {
        label: "Referral Program",
        href: "/pool",
        leftIcon: "Referral",
        description: "Item description",
      },
      {
        label: "IDO",
        href: "/pool",
        leftIcon: "IdoMenu",
        description: "Item description",
      },
    ],
  },
  {
    label: "Win",
    href: "/",
    items: [
      {
        label: "Lottery",
        href: "/pool",
        leftIcon: "Lottery",
        description: "Item description",
      },
      {
        label: "Competitions",
        href: "/pool",
        leftIcon: "Competitions",
        description: "Item description",
      },
    ],
  },
  {
    label: "NFT",
    href: "/",
    items: [
      {
        label: "NFT Launchpad",
        href: "/pool",
        leftIcon: "NftLaunch",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "NFT Earn",
        href: "/pool",
        leftIcon: "NftEarn",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        type: DropdownMenuItemType.BANNER,
        bannerRenderer: getBanner,
      },
    ],
  },
  {
    label: "Info",
    href: "/",
    isExtended: true,
    items: [
      {
        label: "Analytics",
        href: "/pool",
        description: "Item description",
      },
      {
        label: "Voting",
        href: "/pool",
        description: "Item description",
      },
      {
        label: "About BSW",
        href: "/pool",
        description: "Item description",
      },
      {
        label: "Team",
        href: "/pool",
        description: "Item description",
      },
      {
        label: "$10M Program",
        href: "/pool",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "News",
        href: "/pool",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "Docs",
        href: "/pool",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "Audit",
        href: "/pool",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    type: MenuItemType.DIVIDER,
    showItemsOnMobile: true,
  },
  {
    label: "Biswap Products",
    href: "/",
    icon: "Products",
    isMobileNav: true,
    showItemsOnMobile: true,
    items: [
      {
        label: "Marketplace",
        href: "/pool",
        leftIcon: "MarketMenu",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "GameFi",
        href: "/pool",
        leftIcon: "GameFi",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://pancakeswap.finance",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const MENU_HEIGHT = 72;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
export const TOP_BANNER_HEIGHT = 70;
export const TOP_BANNER_HEIGHT_MOBILE = 84;

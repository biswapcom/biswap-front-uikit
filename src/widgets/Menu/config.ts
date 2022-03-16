import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

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
    icon: "Swap",
    items: [
      {
        label: "Swap",
        text: "",
        href: "/swap",
      },
      {
        label: "Expert Trade",
        text: "",
        href: "/liquidity",
      },
    ],
  },
  {
    label: "Earn",
    href: "/earn",
    icon: "Earn",
    items: [
      {
        label: "Earn",
        href: "/earn",
      },
      {
        label: "Yield Farms",
        href: "/farms",
      },
      {
        label: "Syrup pools",
        href: "/pools",
      },
    ],
  },
  {
    label: "Win",
    href: "/",
    icon: "Trophy",
    items: [
      {
        label: "Win",
        href: "/",
      },
      {
        label: "Predictions",
        href: "/",
        status: status.LIVE,
      },
      {
        label: "Lottery",
        href: "/",
      },
    ],
  },
  {
    label: "",
    href: "/",
    icon: "More",
    items: [
      {
        label: "Info & Analytics",
        href: "/",
      },
      {
        label: "IFO Token Sales",
        href: "/",
        status: status.SOON,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: "NFT Collectibles",
        href: "/",
      },
      {
        label: "Team Leaderboard",
        href: "/",
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: "Blog",
        href: "/",
      },
      {
        label: "Docs & Guides",
        href: "/",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: {
      channel: {
        icon: 'LogoIcon',
        label: "Channel",
        href: "https://t.me/biswap_news",
      },
      chats: [
        {
          icon: 'USAIcon',
          label: "English",
          href: "https://t.me/biswap",
        },
        {
          icon: 'IDIcon',
          label: "Bahasa",
          href: "https://t.me/biswap_idn",
        },
        {
          icon: 'RUIcon',
          label: "Русский",
          href: "https://t.me/biswap_rus",
        },
        {
          icon: 'VNIcon',
          label: "Tiếng Việt",
          href: "https://t.me/biswap_vnm",
        },
        // {
        //   icon: 'BDIcon',
        //   label: "Bangladesh",
        //   href: "https://t.me/biswap_bgd",
        // },
        {
          icon: 'FRIcon',
          label: "La France",
          href: "https://t.me/biswap_france",
        },
        {
          icon: 'PTIcon',
          label: "Portugal",
          href: "https://t.me/biswap_prt",
        },
        {
          icon: 'DEIcon',
          label: "Germany",
          href: "https://t.me/biswap_germany",
        },
        {
          icon: 'CNIcon',
          label: "Сhina",
          href: "https://t.me/biswap_china",
        },
      ]
    },
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/Biswap_DEX",
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://biswap-dex.medium.com/",
  },
  {
    label: "Youtube",
    icon: "YoutubeIcon",
    href: "https://www.youtube.com/channel/UCHartwkRUURf2Q7MlKOV84w",
  },
];

export const BSWPriceLabel = "BSW";
export const BSWPriceValue = 1234.947;

export const footerStatistic = [
  {
    label: "Max supply:",
    value: 600000000,
  },
  {
    label: "Total supply:",
    value: 10000000,
  },
  {
    label: "Circulating supply:",
    value: 600000000,
  },
  {
    label: "Total Burned:",
    value: 600000000,
  },
  {
    label: "Market Cap:",
    value: 1600000000,
  },
];

export const aboutLinks = [
  {
    label: "Info",
    href: "/",
  },
  {
    label: "Github",
    href: "/",
  },
  {
    label: "Docs",
    href: "/",
  },
  {
    label: "News",
    href: "/",
  },
  {
    label: "Contacts",
    href: "/",
  },
]

export const productLinks = [
  {
    label: "Exchange",
    href: "/",
  },
  {
    label: "Liquidity",
    href: "/",
  },
  {
    label: "Farming",
    href: "/",
  },
  {
    label: "Launchpools",
    href: "/",
  },
  {
    label: "Bug Bounty?",
    href: "/",
  },
]

export const serviceLinks = [
  {
    label: "Referral",
    href: "/",
  },
  {
    label: "Apply to Lanch",
    href: "/",
  },
  {
    label: "Competitions",
    href: "/",
  },
]

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

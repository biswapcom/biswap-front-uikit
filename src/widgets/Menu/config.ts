import {noop} from "lodash";
import {DropdownMenuItems, DropdownMenuItemType,} from "../../components/DropdownMenu/types";
import {ItemTypes, MenuItemsType} from "../../components/MenuItems/types";
import {LinkStatus} from "./types";

// test component
import {getBanner} from "./components/TestComponents";


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
    label: 'Home',
    href: '/',
    hidden: true,
  },
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
            href: "https://google.com",
            linkType: DropdownMenuItemType.EXTERNAL_LINK,
          },
          {
            label: "Stake tokens",
            href: "/polar",
            linkType: DropdownMenuItemType.INTERNAL_LINK,
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
        target: '_blank',
        mobileTarget: '_self',
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
        target: '_blank',
        mobileTarget: '_self',
      },
      {
        label: "NFT Earn",
        href: "/pool",
        leftIcon: "NftEarn",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
        target: '_self',
        mobileTarget: '_self',
      },
      {
        type: DropdownMenuItemType.BANNER,
        bannerRenderer: getBanner,
        href: "https://google.com",
      },
    ],
  },
  {
    label: "Info",
    isExtended: true,
    items: [
      {
        label: "Analytics",
        href: "https://google.com",
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
    type: ItemTypes.DIVIDER,
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
        {
          icon: 'TRIcon',
          label: "Turkey",
          href: "https://t.me/biswap_turkey",
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
export const MOBILE_EVENT_BUTTON_HEIGHT = 40;
export const FISHING_BANNER_HEIGHT = 40;
export const FISHING_MOBILE_BANNER_HEIGHT = 60;

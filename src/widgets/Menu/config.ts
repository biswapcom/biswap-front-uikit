import { noop } from "lodash";
import {
  DropdownMenuItems,
  DropdownMenuItemType,
} from "../../components/DropdownMenu/types";
import { ItemTypes, MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "secondary",
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
    label: "Home",
    href: "/",
    hidden: true,
  },
  {
    label: "Trade",
    showNavBadge: true,
    colorNavBadge: "warning",
    items: [
      {
        label: "Swap",
        href: "/swap",
        leftIcon: "ExchangeOpacity",
        description: "Item description",
        badgeType: "success",
        badgeTitle: "New",
      },
      {
        label: "Expert Trade",
        leftIcon: "ExpertModeOpacity",
        // rightIcon: "ArrowUpForward",
        rightIconFill: "primary",
        description: "Item description",
        href: "/liquidity",
        disabled: true,
        badgeType: "core",
        badgeTitle: "Modification",
      },
      {
        label: "Liquidity",
        href: "/pool",
        leftIcon: "LiquidityOpacity",
        description: "Item description",
      },
    ],
  },
  {
    label: "Earn",
    showNavBadge: true,
    colorNavBadge: "primary",
    items: [
      {
        label: "Farms",
        href: "/pool",
        leftIcon: "FarmsOpacity",
        description: "Item description",
      },
      {
        label: "Farms",
        href: "/pool",
        leftIcon: "InvestPoolOpacity",
        description: "Item description",
      },
      {
        badgeType: "success",
        badgeTitle: "New",
        label: "LaunchPools",
        href: "/pool",
        leftIcon: "PoolsOpacity",
        description: "Item description description very long long long",
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
        leftIcon: "ReferralOpacity",
        description: "Item description",
      },
      {
        label: "IDO",
        href: "/pool",
        leftIcon: "IdoOpacity",
        description: "Item description",
      },
    ],
  },
  {
    label: "Win",
    highlightTitle: true,
    showNavBadge: true,
    colorNavBadge: "secondary",
    items: [
      {
        label: "Lottery",
        href: "/pool",
        leftIcon: "LotteryOpacity",
        description: "Item description",
        target: "_blank",
        mobileTarget: "_self",
      },
      {
        label: "Competitions",
        href: "/pool",
        leftIcon: "GobletOpacity",
        description: "Item description",
        type: DropdownMenuItemType.CONTAINER,
        links: [
          {
            label: "NFT Staking",
            href: `/nft`,
          },
          {
            label: "NFT Boost",
            href: `/nft/boost`,
          },
        ],
      },
      {
        label: "NFT Launchpad",
        href: `/launchpad`,
        leftIcon: "LaunchpadOpacity",
        description: "Buy new unique NFTs",
      },
    ],
  },
  {
    label: "NFT",
    showNavBadge: true,
    items: [
      {
        label: "NFT Earn",
        leftIcon: "NFTEarnOpacity",
        description: "Stake NFT & Get multiple tokens",
        type: DropdownMenuItemType.CONTAINER,
        links: [
          {
            label: "Staking",
            href: `/nft`,
            badgeTitle: "Ended",
            badgeType: "error",
          },
          {
            label: "NFT Boost",
            href: `/nft/boost`,
          },
          {
            label: "Upgrade Level",
            href: `/nft/upgrade`,
          },
          {
            label: "NFT Launchpad",
            href: "/pool",
            target: "_blank",
            mobileTarget: "_self",
          },
        ],
      },
      {
        href: "/",
        target: "_blank",
        mobileTarget: "_self",
        type: DropdownMenuItemType.BANNER,
      },
    ],
  },
  {
    label: "Info",
    isExtended: true,
    items: [
      {
        label: "Analytics",
        leftIcon: "AnalyticsOpacity",
        href: "https://google.com",
        description: "Item description",
      },
      {
        label: "Voting",
        leftIcon: "VotingOpacity",
        href: "/pool",
        description: "Item description",
      },
      {
        label: "About BSW",
        leftIcon: "AboutBSWOpacity",
        href: "/pool",
        description: "Item description",
      },
      {
        label: "Team",
        leftIcon: "TeamOpacity",
        href: "/pool",
        description: "Item description",
      },
      {
        label: "$10M Program",
        leftIcon: "Program10mOpacity",
        href: "/pool",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "News",
        leftIcon: "NewsOpacity",
        href: "/pool",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "Docs",
        leftIcon: "DocsOpacity",
        href: "/pool",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "Audit",
        leftIcon: "AuditProtectionOpacity",
        href: "/pool",
        description: "Item description",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    type: ItemTypes.DIVIDER,
    showItemsOnMobile: true,
    href: "",
  },
  {
    label: "Buy crypto",
    href: "/",
    isMobileNav: true,
    showItemsOnMobile: true,
  },
  // {
  //   type: ItemTypes.DIVIDER,
  //   showItemsOnMobile: true,
  // },
  // {
  //   label: "Biswap Products", // if changed label, also should be changed in Accordion component condition
  //   icon: "ProductsOpacity",
  //   isMobileNav: true,
  //   showItemsOnMobile: true,
  //   items: [
  //     {
  //       label: "Marketplace",
  //       href: "/pool",
  //       leftIcon: "Market",
  //       description: "Item description",
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //     {
  //       label: "GameFi",
  //       href: "/pool",
  //       leftIcon: "GameFi",
  //       description: "Item description",
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: {
      channel: {
        icon: "LogoIcon",
        label: "Channel",
        href: "https://t.me/biswap_news",
      },
      chats: [
        {
          icon: "USAIcon",
          label: "English",
          href: "https://t.me/biswap",
        },
        {
          icon: "IDIcon",
          label: "Bahasa",
          href: "https://t.me/biswap_idn",
        },
        {
          icon: "RUIcon",
          label: "Русский",
          href: "https://t.me/biswap_rus",
        },
        {
          icon: "VNIcon",
          label: "Tiếng Việt",
          href: "https://t.me/biswap_vnm",
        },
        // {
        //   icon: 'BDIcon',
        //   label: "Bangladesh",
        //   href: "https://t.me/biswap_bgd",
        // },
        {
          icon: "FRIcon",
          label: "La France",
          href: "https://t.me/biswap_france",
        },
        {
          icon: "PTIcon",
          label: "Portugal",
          href: "https://t.me/biswap_prt",
        },
        {
          icon: "DEIcon",
          label: "Germany",
          href: "https://t.me/biswap_germany",
        },
        {
          icon: "CNIcon",
          label: "Сhina",
          href: "https://t.me/biswap_china",
        },
        {
          icon: "TRIcon",
          label: "Turkey",
          href: "https://t.me/biswap_turkey",
        },
        {
          icon: "ESIcon",
          label: "Espanol",
          href: "https://t.me/biswap_espanol",
        },
        {
          icon: "INIcon",
          label: "India",
          href: "https://t.me/biswap_india",
        },
      ],
    },
  },

  {
    label: "Instagram",
    icon: "InstagramIcon",
    href: "https://www.instagram.com/_biswap_dex",
  },
  {
    label: "Facebook",
    icon: "FacebookIcon",
    href: "https://www.facebook.com/profile.php?id=100082146264626",
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
  {
    label: "TikTok",
    icon: "TikTokIcon",
    href: "https://www.tiktok.com/@biswap_dex?_t=8ZvBURxahPR&_r=1",
  },
  {
    label: "CoinMarketCap",
    icon: "CoinMarketCapIcon",
    href: "https://coinmarketcap.com/community/profile/Biswap_DEX/",
  },
  {
    label: "DeBank",
    icon: "DeBankIcon",
    href: "https://debank.com/official-account/112793",
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

export const socialLinks = {
  title: "Community",
  links: [],
};

export const aboutLinks = {
  title: "About Us",
  links: [
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
  ],
};

export const productLinks = {
  title: "Features",
  links: [
    {
      label: "Exchange",
      href: "/swap",
    },
    {
      label: "Liquidity",
      href: "/pool",
    },
    {
      label: "Farms",
      href: `/farms`,
    },
    {
      label: "Launchpools",
      href: `/pools`,
    },
    {
      label: "Multi-Reward Pool",
      href: `/multireward_pool`,
    },
    {
      label: "Fixed Staking",
      href: "/fixed_staking",
    },
    {
      label: "Analytics",
      href: "/analytics",
    },
  ],
};

export const serviceLinks = {
  title: "Service",
  links: [
    {
      label: "Referral program",
      href: "/referral",
    },
    {
      label: "BSW Token",
      href: "/bsw_token",
    },
    {
      label: "Apply to Launch",
      href: "https://forms.gle/V8sQfCi5aBesL2ya8",
    },
    {
      label: "$10M Program",
      href: "/incentive_program",
    },
    {
      label: "Space Agents",
      href: "/space_agents",
    },
  ],
};

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
// export const MENU_ENTRY_HEIGHT = 48;
// export const MOBILE_MENU_HEIGHT = 44;
// export const SIDEBAR_WIDTH_FULL = 240;
// export const SIDEBAR_WIDTH_REDUCED = 56;
export const TOP_BANNER_HEIGHT = 70;
export const TOP_BANNER_HEIGHT_MOBILE = 84;
export const MOBILE_EVENT_BUTTON_HEIGHT = 40;
// export const FISHING_BANNER_HEIGHT = 40;
// export const FISHING_MOBILE_BANNER_HEIGHT = 60;

export const TRANSFER_BLOCK_CLOSED_HEIGHT = 40;
export const TRANSFER_BLOCK_OPENED_HEIGHT = 156;

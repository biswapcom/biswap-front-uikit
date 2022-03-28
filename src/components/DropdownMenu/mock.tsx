import React from "react";
import {noop} from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "./types";

const getBanner = () => <div>BANNER</div>;

const ItemsMock: DropdownMenuItems[] = [
  {
    label: "Swap",
    href: "/swap",
    leftIcon: "Swap",
    description: "Item description",
  },
  {
    label: "Expert Trade",
    href: "/pool",
    leftIcon: "ExpertTrade",
    // rightIcon: "ArrowUpForward",
    rightIconFill: "primary",
    description: "Item description",
    links: [
      {
        label: "Label",
        href: "/polar",
      },
      {
        label: "Label 2",
        href: "/polar",
      },
      {
        label: "Label 3",
        href: "/polar",
      },
      {
        label: "Label 4",
        href: "/polar",
      },
    ],
  },
  {
    label: "Expert Trade",
    href: "/pool",
    leftIcon: "ExpertTrade",
    rightIcon: "ArrowForward",
    rightIconFill: "primary",
    description: "Item description",
  },
  {
    label: "Liquidity",
    href: "/pool",
    leftIcon: "Liquidity",
    description: "Item description",
  },
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
    // leftIcon: 'Referral',
    description: "Item description",
  },
  {
    label: "IDO",
    href: "/pool",
    // leftIcon: 'IdoMenu',
    description: "Item description",
  },
  {
    label: "Lottery",
    href: "/pool",
    // leftIcon: 'Lottery',
    description: "Item description",
  },
  {
    label: "Competitions",
    href: "/pool",
    // leftIcon: 'Competitions',
    description: "Item description",
  },
  {
    label: "NFT Launchpad",
    href: "/pool",
    // leftIcon: 'NftLaunch',
    description: "Item description",
    type: DropdownMenuItemType.EXTERNAL_LINK,
  },
  {
    label: "NFT Earn",
    href: "/pool",
    // leftIcon: 'NftEarn',
    description: "Item description",
    type: DropdownMenuItemType.EXTERNAL_LINK,
  },
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
    // leftIcon: 'GameFi',
    description: "Item description",
    type: DropdownMenuItemType.EXTERNAL_LINK,
  },
  // {
  //   label: "LP Migration",
  //   href: "https://v1exchange.pancakeswap.finance/#/migrate",
  //   type: DropdownMenuItemType.EXTERNAL_LINK,
  // },
  // {
  //   type: DropdownMenuItemType.DIVIDER,
  // },
  // {
  //   label: "Disconnect",
  //   onClick: noop,
  //   type: DropdownMenuItemType.BUTTON,
  // },
  // {
  //   type: DropdownMenuItemType.BANNER,
  //   bannerRenderer: getBanner,
  // },
];

export default ItemsMock;

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link as RouterLink } from "react-router-dom";
import Text from "../Text/Text";
import Link from "../Link/Link";
import LogoIcon from "../Svg/Icons/Logo";
import GobletIcon from "../Svg/Svg";
import BreadCrumbs from "./Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: BreadCrumbs,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <BrowserRouter>
      <Text p="32px">
        <BreadCrumbs mb="32px">
          <a href="/">Link</a>
          <a href="/">Link</a>
          <RouterLink to="/">React Router Link</RouterLink>
          <Text color="gray900">Crumb 1</Text>
          <Text color="gray900">Crumb 2</Text>
        </BreadCrumbs>
        <BreadCrumbs>
          <Text>PancakeSwap</Text>
          <Text>The #1 AMM and yield farm on Binance Smart Chain.</Text>
        </BreadCrumbs>
      </Text>
    </BrowserRouter>
  );
};

export const CustomSeparator: React.FC = () => {
  return (
    <Text p="32px">
      <Text mb="16px">
        <BreadCrumbs separator={<LogoIcon width="12px" />}>
          <a href="/" color="secondary" style={{ fontWeight: 400 }}>
            Link
          </a>
          <Text color="gray900">Crumb 1</Text>
          <Text color="gray900">Crumb 2</Text>
        </BreadCrumbs>
      </Text>
      <Text mb="16px">
        <BreadCrumbs separator={<GobletIcon width="18px" />}>
          <Link href="/" color="failure" style={{ fontWeight: 400 }}>
            Link
          </Link>
          <Link href="/" color="primary" style={{ fontWeight: 400 }}>
            Link 2
          </Link>
          <Text color="gray900">Crumb 2</Text>
        </BreadCrumbs>
      </Text>
    </Text>
  );
};

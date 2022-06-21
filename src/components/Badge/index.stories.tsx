import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Badge from "./Badge";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import styled from "styled-components";
import { BinanceIcon } from "../Svg";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {},
} as Meta;

const Wrapper = styled.div`
  padding: 32px;
`;
const BadgeWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Default: React.FC = () => {
  return (
    <Wrapper>
      <Heading mb={20}>Badges</Heading>
      <BadgeWrapper>
        <Badge isLarge badgeType="notActive">
          notActive
        </Badge>
        <Badge isLarge badgeType="notActive">
          <Text fontSize="18px">notActive</Text>
        </Badge>
        <Badge fontSize="18px" isLarge badgeType="notActive">
          notActive
        </Badge>
        <Badge badgeType="light">light</Badge>
        <Badge badgeType="active">active</Badge>
        <Badge badgeType="success">success</Badge>
        <Badge badgeType="error">error</Badge>
        <Badge badgeType="warning">warning</Badge>
        <Badge badgeType="primary">primary</Badge>
        <Badge badgeType="boost">boost</Badge>
        <Badge badgeType="core">core</Badge>
        <Badge badgeType="any">any</Badge>
        <Badge badgeType="core" isIcon="left">
          <BinanceIcon width="14px" mr="4px" />
          icon left
        </Badge>
        <Badge badgeType="core" isIcon="right">
          icon right
          <BinanceIcon width="14px" ml="4px" />
        </Badge>
        {/*<Badge badgeType="warning" fontWeight='700' fontSize='18px'>up to 120%</Badge>*/}
      </BadgeWrapper>
    </Wrapper>
  );
};

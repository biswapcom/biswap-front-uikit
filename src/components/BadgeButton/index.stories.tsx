import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import BadgeButton from "./BadgeButton";
import Heading from "../Heading/Heading";
import styled from "styled-components";
import { GobletOpacityIcon } from "../Svg";

export default {
  title: "Components/BadgeButton",
  component: BadgeButton,
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
        <BadgeButton badgeType="light">light</BadgeButton>
        <BadgeButton badgeType="active">active</BadgeButton>
        <BadgeButton badgeType="success">success</BadgeButton>
        <BadgeButton badgeType="error">error</BadgeButton>
        <BadgeButton badgeType="warning">warning</BadgeButton>
        <BadgeButton badgeType="primary">primary</BadgeButton>
        <BadgeButton badgeType="boost">boost</BadgeButton>
        <BadgeButton badgeType="notActive">not active</BadgeButton>
        <BadgeButton badgeType="core">core</BadgeButton>
        <BadgeButton badgeType="warningOpacity">warningOpacity</BadgeButton>
        <BadgeButton badgeType="core" isIcon="left">
          <GobletOpacityIcon width="14px" mr="4px" />
          icon left
        </BadgeButton>
        <BadgeButton badgeType="core" isIcon="right">
          icon right
          <GobletOpacityIcon width="14px" ml="4px" />
        </BadgeButton>
      </BadgeWrapper>
    </Wrapper>
  );
};

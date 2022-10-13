import React from "react";
import HeadText from "./HeadText";
import BodyText from "./BodyText";
import Box from "../Box/Box";
import Flex from "../Box/Flex";

export default {
  title: "Components/Typography",
  component: HeadText, BodyText,
  argTypes: {},
};

export const headText: React.FC = () => {
  return (
    <>
      <Flex width="100%" background="white">
        <Box p="32px 24px">
          <HeadText mb="16px" color="dark900">Head text sizes</HeadText>
          <HeadText scale="size40" color="dark800">Size 40</HeadText>
          <HeadText scale="size32" color="dark800">Size 32</HeadText>
          <HeadText scale="size24" color="dark800">Size 24</HeadText>
          <HeadText scale="size20" color="dark800">Size 20</HeadText>
          <HeadText scale="size16" color="dark800">Size 16</HeadText>
          <HeadText scale="size14" color="dark800">Size 14</HeadText>
          <HeadText scale="size12" color="dark800">Size 12</HeadText>
          <HeadText scale="size10" color="dark800">Size 10</HeadText>
        </Box>
        <Box p="32px 24px">
          <HeadText mb="16px" color="dark900">Head text tags</HeadText>
          <HeadText as="h1" color="dark800" scale="size24">tag h1</HeadText>
          <HeadText as="h2" color="dark800" scale="size24">tag h2</HeadText>
          <HeadText as="h3" color="dark800" scale="size24">tag h3</HeadText>
          <HeadText as="h4" color="dark800" scale="size24">tag h4</HeadText>
          <HeadText as="h5" color="dark800" scale="size24">tag h5</HeadText>
          <HeadText as="h6" color="dark800" scale="size24">tag h6</HeadText>
          <HeadText as="p" color="dark800" scale="size24">tag p</HeadText>
          <HeadText as="span" color="dark800" scale="size24">tag span</HeadText>
          <HeadText as="div" color="dark800" scale="size24">tag div</HeadText>
        </Box>
      </Flex>
    </>
  );
};

export const bodyText: React.FC = () => {
  return (
    <Flex width="100%" background="white">
      <Box p="32px 24px">
        <HeadText mb="16px" color="dark900">Body text sizes</HeadText>
        <BodyText scale="size20" color="dark800">size 20</BodyText>
        <BodyText scale="size16" color="dark800">size 16</BodyText>
        <BodyText scale="size14" color="dark800">size 14</BodyText>
        <BodyText scale="size12" color="dark800">size 12</BodyText>
      </Box>
      <Box p="32px 24px">
        <HeadText mb="16px" color="dark900">Body text tags</HeadText>
        <BodyText as="p" scale="size20" color="dark800">tag p</BodyText>
        <BodyText as="span" scale="size20" color="dark800">tag span</BodyText>
        <BodyText as="div" scale="size20" color="dark800">tag div</BodyText>
      </Box>
    </Flex>
  );
};

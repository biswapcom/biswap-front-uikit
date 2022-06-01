import React from "react";
import { PancakesIcon } from "../Svg";
import { Link, LinkExternal } from "./index";
import ArrowIcon from '../Svg/Icons/Arrows/ChevronLeftCircleSolid'
import styled from "styled-components";

const LightWrap = styled.div`
  background: #F9FAFD;
  padding: 24px 32px;
`
const DarkWrap = styled.div`
  background: #07162D;
  padding: 24px 32px;
`

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: React.FC = () => {
  return (
    <div>
      <LightWrap>
        <Link href="/" variant="light" scale="lg">
          Light LG
        </Link>
        <Link href="/" variant="light" scale="md">
          Light MD
        </Link>
        <Link href="/" variant="light" scale="sm" mb="16px">
          Light SM
        </Link>
        <Link href="/" variant="light" scale="md">
          <ArrowIcon mr="4px"/>
          Light MD With icon
        </Link>
        <Link href="/" variant="light" scale="md">
          Light MD With icon
          <ArrowIcon mr="4px"/>
        </Link>
        <Link href="/" variant="light" scale="md">
          <ArrowIcon mr="4px"/>
          Light MD With double icon
          <ArrowIcon mr="4px"/>
        </Link>
        <Link href="/" variant="light" scale="md" disabled>
          <ArrowIcon mr="4px"/>
          Light MD Disabled
          <ArrowIcon mr="4px"/>
        </Link>
      </LightWrap>
      <DarkWrap>
        <Link href="/" variant="light" scale="lg">
          Dark LG
        </Link>
        <Link href="/" variant="light" scale="md">
          Dark MD
        </Link>
        <Link href="/" variant="light" scale="sm" mb="16px">
          Dark SM
        </Link>
        <Link href="/" variant="light" scale="md">
          <ArrowIcon mr="4px"/>
          Dark MD With icon
        </Link>
        <Link href="/" variant="light" scale="md">
          Dark MD With icon
          <ArrowIcon mr="4px"/>
        </Link>
        <Link href="/" variant="light" scale="md">
          <ArrowIcon mr="4px"/>
          Dark MD With double icon
          <ArrowIcon mr="4px"/>
        </Link>
      </DarkWrap>

      <div>
        <LinkExternal href="/">LinkExternal</LinkExternal>
      </div>
    </div>
  );
};

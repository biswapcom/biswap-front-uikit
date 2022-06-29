import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";

const Banner = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;
  background: linear-gradient(120.48deg, #4b8dff 0.96%, #00046c 85.29%);
  border-radius: 10px;
`;

export const getBanner = (href = "/", target = "_blank") => {
  return (
    <Banner href={href} target={target}>
      <Text bold as="h1" color="white">
        BANNER
      </Text>
    </Banner>
  );
};

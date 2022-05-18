import React from 'react';
import styled from 'styled-components';
import {Text} from "../../../components/Text";

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100px;
  background: linear-gradient(120.48deg, #4B8DFF 0.96%, #00046C 85.29%);
  border-radius: 10px;`

export const getBanner = () => {
  return (
    <Banner>
      <Text bold as="h1" color="white">BANNER</Text>
    </Banner>
  )
};

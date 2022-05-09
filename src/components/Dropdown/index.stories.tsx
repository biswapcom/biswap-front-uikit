import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {},
};

const WrapperLight = styled.div`
  background-color: #F9FAFD;
  padding: 32px;
`
const WrapperDark = styled.div`
  background-color: #07162D;
  padding: 32px;
`

export const Default: React.FC = () => {
  return (
    <>
      <WrapperLight>
        <Dropdown target={<Button>Hover</Button>}>
          {[...Array(30)].map(() => (
            <div>Content</div>
          ))}
        </Dropdown>
      </WrapperLight>
      <WrapperDark>
        sss
      </WrapperDark>
    </>
  );
};

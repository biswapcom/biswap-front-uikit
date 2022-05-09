import React, { useState } from "react";
import IconComponent from "../Svg/IconComponent";
import Toggle from "./Toggle";
import styled from "styled-components";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

const WrapperLight = styled.div`
  background: #F9FAFD;
  padding: 24px;
`
const WrapperDark = styled.div`
  background: #07162D;
  padding: 24px;
`

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <WrapperLight>
        <div style={{ marginBottom: "32px" }}>
          <Toggle checked={isChecked} onChange={toggle} scale="md" />
        </div>
        <div style={{ marginBottom: "32px" }}>
          <Toggle
            checked={isChecked}
            defaultColor="secondary"
            checkedColor="success"
            onChange={toggle}
            scale="md"
          />
        </div>
      </WrapperLight>
      <WrapperDark>
        <div style={{ marginBottom: "32px" }}>
          <Toggle checked={isChecked} onChange={toggle} scale="md" />
        </div>
        <div style={{ marginBottom: "32px" }}>
          <Toggle
            checked={isChecked}
            defaultColor="secondary"
            checkedColor="success"
            onChange={toggle}
            scale="md"
          />
        </div>
      </WrapperDark>
    </>
  );
};

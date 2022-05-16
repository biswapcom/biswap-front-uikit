import React, { FC } from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { RadioProps, scales } from "./types";
import {Text} from "../Text";

const getScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case scales.SM:
      return "16px";
    case scales.MD:
    default:
      return "20px";
  }
};

const Wrapper = styled.label<{ labelOrientation?: string }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ labelOrientation }) => labelOrientation === 'left' ? 'row-reverse' : 'row'};
  cursor: pointer;
`

const InputRadio = styled.input.attrs({ type: "radio" })<RadioProps>`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  transition: border-color 0.4s ease-in-out, border-width 0.3s ease-in-out;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.pastelBlue};
  margin: 0;

  &:hover:not(:disabled):not(:checked) {
    border-color: ${({ theme }) => theme.colors.success};
  }

  &:focus {
    outline: none;
  }

  &:checked {
    border-color: ${({ theme }) => theme.colors.success};
    border-width: 4px;
  }
  &:checked + span {
    background: ${({colorVariant}) => colorVariant};
    color: ${({ theme, colorVariant }) => 
            colorVariant === 'dark' ? theme.colors.white : 
                    colorVariant === 'light' ? theme.colors.dark800 : 
                            theme.colors.gray900};
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
  ${space}
`;

const StyledText = styled(Text)`
  transition: color .4s ease-in-out;
`

const Radio:FC<RadioProps> = (
  {
    labelOrientation,
    label,
    scale,
    radioName,
    onChange,
    colorVariant,
    checked
  }) => {
  return (
    <Wrapper labelOrientation={labelOrientation}>
      <InputRadio scale={scale} name={radioName} onChange={onChange} colorVariant={colorVariant} checked={checked}/>
      {label && labelOrientation &&
          <StyledText
              as="span"
              fontSize="12px"
              fontWeight="400"
              color="gray900"
              mr={labelOrientation === "left" ? '12px' : 0}
              ml={labelOrientation === "right" ? '12px' : 0}
          >
            {label}
          </StyledText>
      }
    </Wrapper>
  )
}

Radio.defaultProps = {
  scale: scales.MD,
  m: 0,
  labelOrientation: "left",
  colorVariant: 'light',
};

export default Radio;

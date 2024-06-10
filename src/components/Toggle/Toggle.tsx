import React from "react";
import StyledToggle, { Input, Handle, Label, ToggleWrap } from "./StyledToggle";
import { ToggleProps, scales } from "./types";
import { SpaceProps } from "styled-system";

const Toggle: React.FC<ToggleProps> = ({
  checked,
  defaultColor = "toggleBg",
  checkedColor = "success",
  scale = scales.MD,
  disabled,
  label,
  labelOrientation,
  gridArea,
  variant = "light",
  spaceBetween,
  labelSize = "size12",
  ...props
}) => {
  const isChecked = !!checked;

  return (
    <ToggleWrap
      labelOrientation={labelOrientation}
      disabled={disabled}
      gridArea={gridArea}
      spaceBetween={spaceBetween}
      {...(props as SpaceProps)}
    >
      <StyledToggle
        $checked={isChecked}
        $checkedColor={checkedColor}
        $defaultColor={defaultColor}
        scale={scale}
        disabled={disabled}
      >
        <Input
          readOnly
          checked={checked}
          scale={scale}
          type="checkbox"
          disabled={disabled}
        />
        <Handle scale={scale} disabled={disabled} />
      </StyledToggle>
      {label && (
        <Label
          labelOrientation={labelOrientation}
          isChecked={isChecked}
          disabled={disabled}
          variant={variant}
          scale={labelSize}
          as="span"
        >
          {label}
        </Label>
      )}
    </ToggleWrap>
  );
};

export default Toggle;

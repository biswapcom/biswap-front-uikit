import React from "react";
import StyledToggle, { Input, Handle, Label, ToggleWrap } from "./StyledToggle";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<ToggleProps> = ({
  checked,
  defaultColor = "toggleBg",
  checkedColor = "success",
  scale = scales.MD,
  disabled,
  label,
  labelOrientation,
  gridArea,
  ...props
}) => {
  const isChecked = !!checked;

  return (
    <ToggleWrap labelOrientation={labelOrientation} disabled={disabled} gridArea={gridArea}>
      <StyledToggle
        $checked={isChecked}
        $checkedColor={checkedColor}
        $defaultColor={defaultColor}
        scale={scale}
        disabled={disabled}
      >
        <Input
          checked={checked}
          scale={scale}
          {...props}
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
        >
          {label}
        </Label>
      )}
    </ToggleWrap>
  );
};

Toggle.defaultProps = {
  labelOrientation: "left",
  scale: "md",
};

export default Toggle;

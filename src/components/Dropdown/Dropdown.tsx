import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { variant, space } from "styled-system";
import { DropdownProps, Position, PositionProps, OptionProps } from "./types";
import IconComponent from "../Svg/IconComponent";
import {
  scaleVariantsTop,
  scaleVariantsContent,
  styleVariantsTop,
  scaleVariantItem,
} from "./theme";
import ChevronDown from "../Svg/Icons/Arrows/ChevronDown";

const getBottom = ({ position }: PositionProps) => {
  if (position === "top") {
    return "100%";
  }
  return "auto";
};

const Container = styled.div<{ maxWidth?: string, minWidth?: string }>`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  min-width: ${({ minWidth }) => minWidth || "0"};

  ${space}
`;
const DropdownTop = styled.div<{
  disabled?: boolean,
  scale?: string,
  variant?: string
}>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.4s ease-in-out;

  ${variant({
    prop: "scale",
    variants: scaleVariantsTop,
  })}
  ${variant({
    variants: styleVariantsTop,
  })}
`;
const Label = styled.span`
  flex-grow: 1;
`;
const StyledArrow = styled(ChevronDown)<{ isOpen: boolean, variant?: string }>`
  transition: transform 0.4s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "scale(1,-1)" : "scale(1,1)")};
`;
const DropdownContent = styled.div<{ position?: Position, scale?: string }>`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: ${getBottom};
  z-index: 101;
  box-shadow: 0 16px 32px rgba(0, 26, 67, 0.24);
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  ${variant({
    prop: "scale",
    variants: scaleVariantsContent,
  })}
`;
const DropdownItem = styled.div<{ scale?: string, selected?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.dark800};
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.4s ease-out;

  ${variant({
    prop: "scale",
    variants: scaleVariantItem,
  })}

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  position = "bottom",
  children,
  maxWidth,
  minWidth,
  scale,
  variant,
  disabled,
  options,
  onChange,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      setIsOpen(!isOpen);
      event.stopPropagation();
    }
    return;
  };
  const onOptionClicked = (option: OptionProps) => () => {
    setIsOpen(false);
    setSelectedOption(options[options.indexOf(option)]);
    if (onChange) {
      onChange(option);
    }
  };
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        wrapperRef.current &&
        !(wrapperRef.current as HTMLElement).contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <Container
      maxWidth={maxWidth}
      minWidth={minWidth}
      ref={wrapperRef}
      {...props}
    >
      <DropdownTop
        scale={scale}
        variant={variant}
        onClick={toggling}
        disabled={disabled}
        className={isOpen ? "open" : disabled ? "disabled" : ""}
      >
        {selectedOption.icon && (
          <IconComponent
            iconName={selectedOption.icon.name}
            color={selectedOption.icon.color}
          />
        )}
        <Label>{selectedOption.label}</Label>
        <StyledArrow className="arrow" isOpen={isOpen} />
      </DropdownTop>
      {isOpen && (
        <DropdownContent position={position} scale={scale}>
          {options.map((option) => (
            <DropdownItem
              scale={scale}
              selected={option.label === selectedOption.label}
              onClick={onOptionClicked(option)}
              key={option.label}
            >
              {option.icon && (
                <IconComponent
                  iconName={option.icon.name}
                  color={option.icon.color}
                />
              )}
              <span>{option.label}</span>
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </Container>
  );
};
Dropdown.defaultProps = {
  position: "bottom",
};

export default Dropdown;
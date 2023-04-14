import React from "react";
import IconComponent from "../../../Svg/IconComponent";
import { IDirectionButtonProps } from "../../types";
import { CarouselButtonsTypes } from "../../../../hooks";
import { WrapperDirectionButton } from "./style";

export const DirectionButton = ({
  enabled,
  onClick,
  iconName,
  isNextButton,
  themeType,
  navPadding,
}: IDirectionButtonProps) => {
  return (
    <WrapperDirectionButton
      onClick={onClick}
      disabled={!enabled}
      isNextButton={isNextButton}
      variant={themeType}
      navPadding={navPadding}
    >
      <IconComponent
        iconName={iconName}
        color={themeType === CarouselButtonsTypes.WHITE ? "dark900" : "white"}
        height="32px"
      />
    </WrapperDirectionButton>
  );
};

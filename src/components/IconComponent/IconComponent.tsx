import React from "react";
import * as IconModule from "../Svg";
import { SvgProps } from "../Svg";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const IconComponent: React.FC<{ iconName: string } & SvgProps> = ({
  iconName,
  ...props
}) => {
  const IconElement = Icons[`${iconName}Icon`];
  return IconElement ? <IconElement {...props} /> : null;
};

export default IconComponent;

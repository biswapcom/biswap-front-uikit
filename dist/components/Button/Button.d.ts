import React, { ReactElement } from "react";
import { ButtonProps } from "./types";
declare const Button: <E extends React.ElementType = "button">(props: ButtonProps<E>) => ReactElement;
export default Button;

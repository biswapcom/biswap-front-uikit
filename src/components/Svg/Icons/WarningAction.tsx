import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
    <Svg viewBox="0 0 32 30" {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0311 2.5655L31.3351 22.779C33.1918 25.8212 30.9399 29.6667 27.3041 29.6667H4.69556C1.05662 29.6667 -1.1912 25.8181 0.66543 22.779L11.9689 2.5655C13.7876 -0.412685 18.2149 -0.408734 20.0311 2.5655ZM17.6007 9.9307C17.6007 9.04831 16.8825 8.33004 16.0001 8.33004C15.1177 8.33004 14.3994 9.04831 14.3994 9.9307V17.934C14.3994 18.8164 15.1177 19.5346 16.0001 19.5346C16.8825 19.5346 17.6007 18.8164 17.6007 17.934V9.9307ZM16.0001 21.1353C15.1177 21.1353 14.3994 21.8535 14.3994 22.7359C14.3994 23.6183 15.1177 24.3366 16.0001 24.3366C16.8825 24.3366 17.6007 23.6183 17.6007 22.7359C17.6007 21.8535 16.8825 21.1353 16.0001 21.1353Z" fill="#FFDB1C"/>
    </Svg>
);
};

export default Icon;
import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 56 57" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1713 1.65014L1.23073 15.5919C0.443196 16.3795 0.000756774 17.4477 0.000732422 18.5615L0.000732422 38.2796C0.00073798 39.3935 0.443234 40.4618 1.23088 41.2494L15.1713 55.1898C15.9589 55.9774 17.0272 56.4199 18.141 56.4199H37.8589C38.9728 56.4199 40.041 55.9774 40.8286 55.1898L54.7691 41.2494C55.5567 40.4618 55.9992 39.3935 55.9992 38.2796V18.5615C55.9992 17.4477 55.5567 16.3796 54.7692 15.5919L40.8287 1.65014C40.4387 1.26011 39.9757 0.950717 39.4661 0.739636C38.9565 0.528554 38.4104 0.419915 37.8588 0.419922L18.1412 0.419922C17.5896 0.419915 17.0434 0.528554 16.5339 0.739636C16.0243 0.950717 15.5613 1.26011 15.1713 1.65014Z"
        fill="#F40D12"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.333 48.7188C36.61 48.7188 38.8113 40.2093 38.8113 40.2093L44.1358 24.9109C44.1358 24.9109 44.6166 23.3228 44.5284 23.3051C39.57 22.3788 38.5157 25.8726 38.5157 25.8726C38.5157 25.8726 36.61 30.8221 36.3144 30.8221C36.0189 30.8221 35.9836 30.4559 35.9836 30.4559V12.6739C35.9836 12.6739 36.0762 10.3799 33.7206 10.3799C31.3649 10.3799 31.484 12.6783 31.484 12.6783L31.4885 25.8152C31.4885 25.8152 31.5193 26.3446 31.0781 26.3446C30.6855 26.3446 30.7076 25.8329 30.7076 25.8329V10.005C30.7076 10.005 30.8532 7.41992 28.4711 7.41992C26.0889 7.41992 26.2168 10.0227 26.2168 10.0227L26.1949 25.6388C26.1949 25.6388 26.2257 26.1196 25.8331 26.1196C25.4669 26.1196 25.4802 25.6432 25.4802 25.6432V12.5504C25.4802 12.5504 25.6125 9.88588 23.1863 9.88588C20.8042 9.88588 20.9321 12.5989 20.9321 12.5989L20.9101 26.424C20.9101 26.424 20.9542 26.8254 20.5792 26.8254C20.1822 26.8254 20.191 26.424 20.191 26.424L20.1734 18.0645C20.1734 18.0645 20.1954 15.753 18.1927 15.753C16.062 15.753 16.1017 18.0645 16.1017 18.0645V36.1069C16.115 36.1025 15.5635 48.7188 27.333 48.7188Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;

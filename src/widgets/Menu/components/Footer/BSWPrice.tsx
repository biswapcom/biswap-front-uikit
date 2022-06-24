import React from "react";
import styled from "styled-components";
import Text from "../../../../components/Text/Text";
import { BSWPriceProps } from "../../types";
// import { formatSpacingAmount } from "../../../util/formatSpacingAmount";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 38px 1fr;
  grid-template-areas:
    "logo bsw-title"
    "logo bsw-value";
  grid-column-gap: 8px;
  position: relative;

  ${({ theme }) => theme.mediaQueries.xll} {
    grid-column-gap: 16px;
  }

  .logo {
    width: 38px;
    grid-area: logo;
  }
`;

const BSWPrice: React.FC<BSWPriceProps> = ({
  BSWPriceLabel,
  BSWPriceValue,
}) => {
  return (
    <Wrapper>
      <svg className="logo"  viewBox="0 0 5265 5265" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2632.32 5264.65C4086.12 5264.65 5264.65 4086.12 5264.65 2632.32C5264.65 1178.53 4086.12 0 2632.32 0C1178.53 0 0 1178.53 0 2632.32C0 4086.12 1178.53 5264.65 2632.32 5264.65Z" fill="white"/>
        <path d="M4671.32 990.315C4488.76 1026.4 4314.68 1077.35 4171.39 1109.19C3844.47 1182.43 3538.78 1432.93 3471.91 1891.46C3412.47 2301.17 3550.46 2477.37 3489.96 2953.94C3383.82 3786.1 2585.63 4072.68 2213.07 4246.76C1997.6 4346.53 1474.32 4575.8 1070.98 4750.93C1508.29 5073.6 2047.49 5264.66 2632.33 5264.66C4086.48 5264.66 5264.65 4086.48 5264.65 2632.33C5264.65 2012.46 5050.25 1442.48 4691.49 993.5C4685.12 992.438 4678.75 991.377 4671.32 990.315Z" fill="url(#paint0_linear_221_540)"/>
        <path d="M2336.19 2245.97C2538.92 1807.6 2465.68 1806.54 2619.59 1394.71C2813.83 872.488 3417.78 1021.09 3584.42 1043.38C3859.33 1080.53 3931.5 982.876 4511.04 889.471C4539.7 885.225 4567.29 880.98 4594.89 877.795C4113.01 339.655 3412.47 0 2632.32 0C1584.7 0 680.371 611.379 256.864 1497.67C1125.11 1713.13 2062.34 2181.22 2336.19 2245.97ZM1760.9 458.534C1837.32 470.21 2208.82 931.928 2278.87 2117.54C2278.87 2117.54 1801.23 2002.9 1698.27 1756.65C1613.36 1553.92 1723.75 1287.5 1760.9 458.534ZM4687.24 988.183C4688.3 990.306 4690.42 991.367 4691.48 993.49C4685.11 992.429 4677.68 992.429 4671.31 991.367C4676.62 989.245 4681.93 989.245 4687.24 988.183ZM0 2632.32C0 2422.16 24.4127 2218.37 71.1152 2023.07C166.643 2102.68 268.54 2190.77 376.805 2291.61C1062.48 2927.4 2178.04 3429.45 2584.56 2962.43C2585.62 2963.49 2586.68 2963.49 2586.68 2964.55C2512.38 3062.2 2228.98 3371.07 1687.66 3275.55L832.154 4552.44C320.549 4072.67 0 3390.18 0 2632.32Z" fill="url(#paint1_linear_221_540)"/>
        <defs>
          <linearGradient id="paint0_linear_221_540" x1="4213.17" y1="1679.76" x2="3592.14" y2="5101.01" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF496A"/>
            <stop offset="1" stopColor="#E42648"/>
          </linearGradient>
          <linearGradient id="paint1_linear_221_540" x1="1270.54" y1="3877.57" x2="2643.62" y2="-7.11787e-05" gradientUnits="userSpaceOnUse">
            <stop offset="0.00181229" stopColor="#1158F1"/>
            <stop offset="1" stopColor="#119BED"/>
          </linearGradient>
        </defs>
      </svg>
      <Text color="gray900" fontSize="12px" lineHeight="18px">
        {BSWPriceLabel}
      </Text>
      <Text color="contrast" fontSize="16px" lineHeight="19px" bold>
        {/*${formatSpacingAmount(BSWPriceValue)}*/}
        {BSWPriceValue}
      </Text>
    </Wrapper>
  );
};

export default BSWPrice;

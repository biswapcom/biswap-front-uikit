import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9949 0.1271C15.7004 -0.0405764 15.3393 -0.0405762 15.0449 0.1271L7.52475 4.40914C7.22494 4.57986 7.03979 4.89833 7.03979 5.24334V13.7845C7.03979 14.1295 7.22494 14.448 7.52475 14.6187L15.0449 18.9008C15.3393 19.0684 15.7004 19.0684 15.9949 18.9008L23.515 14.6187C23.8148 14.448 23.9999 14.1295 23.9999 13.7845V5.24334C23.9999 4.89833 23.8148 4.57986 23.515 4.40914L15.9949 0.1271ZM9.87568 8.76056V11.6853H8.77848V6.97803H9.73724L11.9801 9.8993V6.97803H13.0773V11.6853H12.1289L9.87915 8.76056H9.87568ZM15.6329 9.95121V11.6853H14.5357V6.97803H17.855V7.95409H15.6329V9.03399H17.5401V9.95121H15.6329ZM21.089 7.95409V11.6853H19.9988V7.95409H18.68V6.97803H22.4043V7.95409H21.089Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.59476 10.5629C2.38355 10.989 0 12.5649 0 14.4452C0 16.653 3.28694 18.4411 7.33948 18.4411C8.50167 18.4411 9.60076 18.2941 10.5774 18.0324L6.09473 15.4441C5.78535 15.2654 5.59476 14.9353 5.59476 14.5781V10.5629ZM11.8673 18.7772C10.6202 19.3102 9.04821 19.6279 7.33948 19.6279C3.29727 19.6279 0.0187879 17.8593 0 15.6608V17.2247C0 19.4325 3.28506 21.2206 7.33948 21.2206C9.77296 21.2206 11.9293 20.5764 13.2645 19.584L11.8673 18.7772ZM14.0468 20.0357C12.9035 21.4335 10.331 22.4074 7.33948 22.4074C3.29727 22.4074 0.0187879 20.6387 0 18.4402V20.0041C0 22.2119 3.28506 24 7.33948 24C11.1598 24 14.2971 22.4124 14.6466 20.382L14.0468 20.0357Z" />
    </Svg>
  );
};

export default Icon;
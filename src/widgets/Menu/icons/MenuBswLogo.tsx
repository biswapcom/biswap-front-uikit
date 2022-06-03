import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M18.9715 6.38586C18.3473 6.50925 17.7522 6.68344 17.2623 6.79231C16.1445 7.04272 15.0994 7.89917 14.8707 9.46691C14.6675 10.8677 15.1393 11.4701 14.9324 13.0996C14.5695 15.9447 11.8405 16.9246 10.5667 17.5197C9.83001 17.8608 8.0409 18.6447 6.66187 19.2435C8.15703 20.3467 10.0006 20.9999 12.0002 20.9999C16.9719 20.9999 21.0002 16.9717 21.0002 12C21.0002 9.88061 20.2671 7.93183 19.0405 6.39675C19.0187 6.39312 18.9969 6.38949 18.9715 6.38586Z"
        fill="white"
      />
      <path
        d="M10.9875 10.679C11.6806 9.18023 11.4302 9.1766 11.9564 7.76854C12.6206 5.98306 14.6855 6.49112 15.2552 6.56733C16.1951 6.69435 16.4419 6.36048 18.4234 6.04112C18.5214 6.02661 18.6157 6.01209 18.7101 6.0012C17.0625 4.16129 14.6673 3 12 3C8.41814 3 5.32621 5.09032 3.87822 8.12055C6.84677 8.85725 10.0512 10.4576 10.9875 10.679ZM9.02056 4.56774C9.28185 4.60766 10.552 6.18628 10.7915 10.2399C10.7915 10.2399 9.15846 9.84797 8.80645 9.00604C8.51612 8.31289 8.89354 7.40201 9.02056 4.56774ZM19.0258 6.37862C19.0294 6.38588 19.0367 6.38951 19.0403 6.39677C19.0185 6.39314 18.9931 6.39314 18.9714 6.38951C18.9895 6.38225 19.0076 6.38225 19.0258 6.37862ZM3 12C3 11.2814 3.08347 10.5847 3.24314 9.91692C3.56976 10.1891 3.91814 10.4903 4.28831 10.8351C6.63266 13.0089 10.4468 14.7254 11.8367 13.1286C11.8403 13.1322 11.8439 13.1322 11.8439 13.1359C11.5899 13.4697 10.621 14.5258 8.77016 14.1992L5.84516 18.5649C4.09597 16.9246 3 14.5911 3 12Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;

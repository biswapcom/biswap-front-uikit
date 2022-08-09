import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.6005 11.0834C14.518 11.4697 16 12.2774 16 14.1388C16 15.7332 14.8762 16.7165 13.1272 17.0045V18.1072H11.0833V17.0256C8.84972 16.7165 7.99983 15.2626 7.99983 13.8929H10.2264C10.2264 14.6866 10.8656 15.2204 12.0034 15.2204C13.2466 15.2204 13.7453 14.8552 13.7453 14.1317C13.7453 13.4715 13.064 13.1976 11.8278 12.9166C10.2194 12.5303 8.23864 11.8981 8.23864 9.87528C8.23864 8.41431 9.17984 7.34669 11.0833 7.10788V5.89275H13.1272V7.16407C14.827 7.49419 15.6699 8.56181 15.6699 10.0649H13.4433C13.4433 9.53111 13.064 8.99729 11.8981 8.99729C10.711 8.99729 10.4652 9.45384 10.4652 9.88932C10.4652 10.5004 11.0973 10.8024 12.6005 11.0834Z"
      />
      <path d="M15.9999 14.1387C15.9999 12.2774 14.5179 11.4696 12.6004 11.0833C11.0973 10.8024 10.4651 10.5003 10.4651 9.88927C10.4651 9.45379 10.711 8.99724 11.898 8.99724C13.064 8.99724 13.4432 9.53106 13.4432 10.0649H15.6698C15.6698 8.56176 14.8269 7.49414 13.1272 7.16402V5.8927H11.0832V7.10783C9.17976 7.34664 8.23857 8.41426 8.23857 9.87523C8.23857 11.8981 10.2193 12.5302 11.8278 12.9166C13.064 13.1975 13.7453 13.4714 13.7453 14.1317C13.7453 14.8551 13.2466 15.2204 12.0034 15.2204C10.8655 15.2204 10.2263 14.6866 10.2263 13.8929H7.99976C7.99976 15.2625 8.84964 16.7165 11.0832 17.0255V18.1072H13.1272V17.0044C14.8761 16.7165 15.9999 15.7331 15.9999 14.1387Z" />
    </Svg>
  );
};

export default Icon;
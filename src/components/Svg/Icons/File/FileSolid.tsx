import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M15.1797 7.44531C14.3504 7.44531 13.6758 6.77066 13.6758 5.94141V1H5.98438C4.68126 1 3.62109 2.06017 3.62109 3.36328V20.6367C3.62109 21.9398 4.68126 23 5.98438 23H18.0156C19.3187 23 20.3789 21.9398 20.3789 20.6367V7.44531H15.1797ZM7.14453 16.4688H10.2692C10.6252 16.4688 10.9138 16.7573 10.9138 17.1133C10.9138 17.4692 10.6252 17.7578 10.2692 17.7578H7.14453C6.78858 17.7578 6.5 17.4692 6.5 17.1133C6.5 16.7573 6.78858 16.4688 7.14453 16.4688ZM6.5 13.6758C6.5 13.3198 6.78858 13.0312 7.14453 13.0312H16.5977C16.9536 13.0312 17.2422 13.3198 17.2422 13.6758C17.2422 14.0317 16.9536 14.3203 16.5977 14.3203H7.14453C6.78858 14.3203 6.5 14.0317 6.5 13.6758ZM16.5977 9.59375C16.9536 9.59375 17.2422 9.88233 17.2422 10.2383C17.2422 10.5942 16.9536 10.8828 16.5977 10.8828H7.14453C6.78858 10.8828 6.5 10.5942 6.5 10.2383C6.5 9.88233 6.78858 9.59375 7.14453 9.59375H16.5977Z" />
      <path d="M14.9648 5.94143C14.9648 6.0599 15.0612 6.15627 15.1797 6.15627H20.0916C19.9737 5.9386 19.822 5.73866 19.6398 5.56623L15.4966 1.64653C15.3358 1.49442 15.1567 1.36754 14.9649 1.26733V5.94143H14.9648Z" />
    </Svg>
  );
};

export default Icon;
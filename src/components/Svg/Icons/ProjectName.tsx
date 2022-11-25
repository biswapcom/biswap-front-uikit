import React from "react";
import { SvgProps } from "../types";
import Svg from "../Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} width="77" height="22" viewBox="0 0 77 22" fill="none">
      <path
        d="M62.2919 8.11981C62.0721 7.60201 61.7059 7.08422 61.2664 6.78834C60.7537 6.41848 60.1677 6.1226 59.362 5.90069C58.3365 5.60481 56.8716 5.53083 55.1869 5.6048C54.7474 5.6048 54.3079 5.67878 53.8684 5.67878C53.4289 5.75275 52.9894 5.75275 52.55 5.82672C52.1837 5.90069 51.8175 5.90069 51.5245 5.97466V8.78555C51.8175 8.71157 52.1837 8.6376 52.4767 8.56363C52.9162 8.48966 53.3557 8.41569 53.7952 8.34172C54.2347 8.26775 54.6741 8.26775 55.1136 8.19378C56.3588 8.11981 57.3843 8.11981 57.9703 8.26775C58.4098 8.34172 58.776 8.48966 58.9957 8.6376C59.2155 8.78555 59.362 9.00746 59.4352 9.30334C59.5085 9.52525 59.5817 9.74716 59.5817 10.043V10.265L59.362 10.191C58.4098 9.89511 57.2378 9.82113 55.9193 9.82113C54.8206 9.82113 53.9417 9.89511 53.2092 10.043C52.4767 10.191 51.8907 10.4129 51.4513 10.7088C51.0118 11.0047 50.7188 11.3005 50.5723 11.6704C50.4258 12.0403 50.3525 12.4101 50.3525 12.8539V13.0758C50.3525 13.5197 50.4258 13.9635 50.6455 14.3333C50.792 14.7032 51.085 15.0731 51.5245 15.4429C51.964 15.7388 52.55 16.0347 53.2824 16.1826C54.0149 16.4045 54.9671 16.4785 56.0658 16.4785C57.0181 16.4785 57.897 16.4045 58.6295 16.1826C59.362 16.0347 59.5085 15.9607 60.1677 15.6648C60.3874 15.5169 60.9734 15.4429 61.3396 15.5909L61.9989 15.9607H62.6581V9.74716C62.6581 9.37731 62.5116 8.71157 62.2919 8.11981ZM59.5817 13.8895H59.4352C58.483 14.1854 57.4575 14.3333 56.2856 14.3333C55.6264 14.3333 55.0404 14.3333 54.6741 14.2594C54.3079 14.1854 54.0149 14.1854 53.7952 14.0375C53.5754 13.9635 53.4289 13.8156 53.3557 13.6676C53.2824 13.5197 53.2824 13.3717 53.2824 13.2238C53.2824 13.0758 53.2824 13.0019 53.3557 12.8539C53.4289 12.706 53.5754 12.5581 53.7219 12.4841C53.8684 12.4101 54.1614 12.2622 54.5276 12.2622C54.8939 12.1882 55.4066 12.1882 55.9926 12.1882C56.6518 12.1882 57.2378 12.1882 57.8238 12.2622C58.3365 12.3361 58.8492 12.4101 59.362 12.5581H59.5085V13.8895H59.5817Z"
        fill="white"
      />
      <path
        d="M11.0906 6.93619C10.6511 6.49236 10.0651 6.12251 9.33266 5.82663C8.60019 5.53074 7.64798 5.3828 6.47602 5.3828C5.89005 5.3828 5.30407 5.45677 4.79134 5.53074C4.27861 5.60471 3.76588 5.75266 3.25315 5.9006L3.03341 5.97457V1.98015L0.61625 0.574707H0.0302734V11.3744C0.0302734 12.1141 0.103522 12.7799 0.323263 13.3716C0.469758 13.9634 0.835993 14.4812 1.27548 14.999C1.71496 15.4428 2.30093 15.8127 3.03341 16.1086C3.76588 16.4044 4.71809 16.5524 5.89005 16.5524H6.47602C7.64798 16.5524 8.60019 16.4044 9.33266 16.1086C10.0651 15.8866 10.7244 15.5168 11.1638 14.999C11.6033 14.5552 11.8963 14.0374 12.1161 13.3716C12.2626 12.7059 12.409 12.0402 12.409 11.3744V10.5608C12.409 9.82104 12.3358 9.15531 12.1161 8.56354C11.8963 7.89781 11.5301 7.38001 11.0906 6.93619ZM9.25942 11.9662C9.25942 12.336 9.11292 12.6319 8.89318 12.9278C8.67344 13.1497 8.38045 13.3716 7.94097 13.5935C7.50148 13.7415 6.91551 13.8155 6.18304 13.8155C5.45057 13.8155 4.86459 13.7415 4.4251 13.5935C3.98562 13.4456 3.69263 13.2237 3.47289 12.9278C3.25315 12.6319 3.1799 12.336 3.10666 11.9662C3.10666 11.6703 3.03341 11.3005 3.03341 10.9306V8.63751H3.10666C3.54614 8.48957 4.05887 8.34163 4.5716 8.26766C5.08433 8.19369 5.59706 8.11972 6.25628 8.11972C6.98875 8.11972 7.57473 8.19369 7.94097 8.34163C8.3072 8.48957 8.67344 8.71148 8.81993 8.93339C9.03968 9.22928 9.11292 9.52516 9.18617 9.89501C9.18617 10.1909 9.25942 10.5608 9.25942 10.9306C9.25942 11.3005 9.25942 11.6703 9.25942 11.9662Z"
        fill="white"
      />
      <path
        d="M15.9982 0.574707H15.8517C15.1925 0.574707 14.753 0.722648 14.5332 0.94456C14.3135 1.24044 14.167 1.53633 14.167 1.98015V2.20206C14.167 2.57192 14.3135 2.94177 14.5332 3.23765C14.753 3.53353 15.1925 3.60751 15.8517 3.60751H15.9982C16.6574 3.60751 17.0969 3.45956 17.3166 3.23765C17.5364 2.94177 17.6096 2.64589 17.6096 2.20206V1.98015C17.6096 1.6103 17.4631 1.24044 17.2434 0.94456C17.0969 0.722648 16.6574 0.574707 15.9982 0.574707Z"
        fill="white"
      />
      <path
        d="M14.3857 5.82666V16.1086H17.4621V7.2321L15.045 5.82666H14.3857Z"
        fill="white"
      />
      <path
        d="M29.4748 10.7827C29.1818 10.5608 28.8156 10.3388 28.4493 10.1909C28.0831 10.043 27.6436 9.969 27.2041 9.89503C26.8379 9.82105 26.3984 9.74708 26.0322 9.74708C25.6659 9.74708 25.2997 9.74708 25.08 9.67311C24.201 9.67311 23.615 9.59914 23.2488 9.52517C22.6628 9.37723 22.5896 9.08135 22.5896 8.78546C22.5896 8.63752 22.5896 8.56355 22.6628 8.48958C22.7361 8.41561 22.8093 8.26767 23.0291 8.1937C23.1755 8.11973 23.4685 8.04576 23.7615 8.04576C24.0545 7.97179 24.494 7.97179 25.08 7.97179C25.9589 7.97179 26.8379 8.04576 27.6436 8.11973C28.3761 8.1937 29.1818 8.34164 29.9875 8.48958V5.90061C29.3283 5.75267 28.6691 5.60473 27.9366 5.53075C27.2041 5.45678 26.3984 5.38281 25.6659 5.38281H24.9335C23.8348 5.38281 22.9558 5.45678 22.2233 5.6787C21.5641 5.82664 20.9781 6.12252 20.5386 6.4184C20.0992 6.71429 19.8062 7.08414 19.6597 7.45399C19.5132 7.82385 19.4399 8.26767 19.4399 8.71149V8.93341C19.4399 9.4512 19.5132 9.89503 19.7329 10.2649C19.9527 10.6347 20.1724 10.9306 20.4654 11.1525C20.7584 11.3744 21.1246 11.5964 21.4909 11.7443C21.8571 11.8922 22.2966 11.9662 22.6628 12.0402C23.1023 12.1141 23.4685 12.1881 23.8348 12.1881C24.201 12.1881 24.5672 12.2621 24.8602 12.2621C25.7392 12.2621 26.3252 12.3361 26.6914 12.41C27.2774 12.484 27.4239 12.8539 27.4239 13.1497C27.4239 13.2237 27.4239 13.3716 27.3506 13.4456C27.2774 13.5196 27.2041 13.6675 26.9844 13.7415C26.8379 13.8155 26.5449 13.8894 26.2519 13.8894C25.9589 13.9634 25.5195 13.9634 25.0067 13.9634C24.1278 13.9634 23.1023 13.8894 22.1501 13.8155C21.2711 13.7415 20.3189 13.5936 19.5132 13.3716V15.9606C20.3189 16.1086 21.0514 16.2565 21.8571 16.3305C22.6628 16.4044 23.615 16.4784 24.494 16.4784H25.08C26.1787 16.4784 27.0576 16.4044 27.7169 16.1825C28.4493 16.0346 28.9621 15.7387 29.4015 15.4428C29.841 15.1469 30.0608 14.7771 30.2805 14.4072C30.427 14.0374 30.5735 13.5936 30.5735 13.1497V12.9278C30.5735 12.41 30.5003 11.9662 30.2805 11.5964C29.9875 11.3005 29.7678 11.0046 29.4748 10.7827Z"
        fill="white"
      />
      <path
        d="M44.4179 12.558L41.781 5.82666H39.4371L36.8734 12.558L34.2365 5.82666H31.5264V6.4924L35.4817 16.1086H38.1919L40.609 9.89505L43.0262 16.1086H45.7363L49.7649 6.4924V5.82666H46.9815L44.4179 12.558Z"
        fill="white"
      />
      <path
        d="M76.4988 8.7115C76.3524 8.11974 75.9861 7.60194 75.5466 7.08415C75.1072 6.64032 74.5212 6.27047 73.7155 5.97459C72.983 5.6787 72.0308 5.53076 70.8588 5.53076H70.3461C69.1741 5.53076 68.2219 5.6787 67.4895 5.97459C66.757 6.1965 66.171 6.56635 65.7315 7.08415C65.292 7.52797 64.9991 8.04577 64.7793 8.7115C64.6328 9.37724 64.4863 10.043 64.4863 10.7087V21.5084H65.1456L67.5627 20.103V16.1086L67.7824 16.1825C68.2952 16.3305 68.7347 16.4784 69.3206 16.5524C69.8334 16.6264 70.4193 16.7003 71.0053 16.7003C72.1773 16.7003 73.1295 16.5524 73.862 16.2565C74.5944 15.9606 75.1804 15.6647 75.6199 15.147C76.0594 14.7031 76.3524 14.1114 76.5721 13.5196C76.7186 12.9278 76.8651 12.2621 76.8651 11.5224V10.7087C76.7918 10.043 76.7186 9.37724 76.4988 8.7115ZM73.7155 12.1881C73.7155 12.558 73.569 12.8539 73.3492 13.1497C73.1295 13.4456 72.8365 13.5936 72.4703 13.7415C72.104 13.8895 71.5181 13.9634 70.7856 13.9634C70.1996 13.9634 69.6136 13.8895 69.1009 13.8155C68.5882 13.7415 68.0754 13.5936 67.636 13.4456H67.5627V11.1525C67.5627 10.7827 67.5627 10.4868 67.636 10.1169C67.636 9.74709 67.7824 9.45121 68.0022 9.15533C68.2219 8.85944 68.5149 8.7115 68.9544 8.48959C69.3939 8.34165 69.9799 8.26768 70.7123 8.26768C71.4448 8.26768 72.0308 8.34165 72.4703 8.48959C72.9097 8.63753 73.2027 8.85944 73.4225 9.15533C73.6422 9.45121 73.7887 9.74709 73.7887 10.1169C73.7887 10.4128 73.862 10.7827 73.862 11.1525C73.7155 11.5224 73.7155 11.8922 73.7155 12.1881Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
import React from "react";
import {Svg, SvgProps} from "../Svg";

const CircleIcon: React.FC<SvgProps> = (props) => {

    return (
        <Svg viewBox="0 0 20 20" {...props}>
            <g clipPath="url(#clip0_4728_34338)">
                <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"/>
                <g filter="url(#filter0_d_4728_34338)">
                    <rect x="4" y="4" width="12" height="12" rx="6" fill="white"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_d_4728_34338" x="0" y="2" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.0862745 0 0 0 0 0.176471 0 0 0 0.32 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4728_34338"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4728_34338" result="shape"/>
                </filter>
                <clipPath id="clip0_4728_34338">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
    </Svg>
);
};

export default CircleIcon;
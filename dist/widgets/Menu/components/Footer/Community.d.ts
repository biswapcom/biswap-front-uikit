import React from "react";
export interface CommunityProps {
    iconSize?: string;
    menuVariant?: boolean;
    title?: string;
}
export interface SocialWrapProps {
    menuVariant?: boolean;
}
declare const Community: React.FC<CommunityProps>;
export default Community;

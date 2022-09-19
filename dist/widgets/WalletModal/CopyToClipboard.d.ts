import React, { ReactNode } from "react";
interface Props {
    toCopy: string;
    children: ReactNode;
}
declare const CopyToClipboard: React.FC<Props>;
export default CopyToClipboard;

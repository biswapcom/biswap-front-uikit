import { FC } from "react";
interface Props {
    title?: string;
    showNavButtons: boolean;
    handleNav: (arg: string) => void;
}
declare const CarouselHeader: FC<Props>;
export default CarouselHeader;

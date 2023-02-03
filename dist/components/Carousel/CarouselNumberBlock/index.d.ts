import { FC } from "react";
interface Props {
    dataLength: number;
    selectedIndex: number;
    scrollToHandle: (arg: number) => void;
}
declare const CarouselNumbersBlock: FC<Props>;
export default CarouselNumbersBlock;

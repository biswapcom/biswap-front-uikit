import React from "react";
import Button from "../../../../components/Button/Button";

export interface Props {
  buyBswHandler: () => void;
}

const BuyBSW: React.FC<Props> = ({ buyBswHandler }) => {
  return (
    <Button onClick={buyBswHandler} variant="danger" scale="md">
      Buy BSW
    </Button>
  );
};

export default BuyBSW;

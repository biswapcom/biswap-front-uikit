import React from "react";
import Button from "../../../../components/Button/Button";

export interface Props {
  buyBswHandler: () => void;
  buyBswLabel: string;
}

const BuyBSW: React.FC<Props> = ({ buyBswHandler, buyBswLabel }) => {
  return (
    <Button onClick={buyBswHandler} variant="danger" scale="md">
      {buyBswLabel}
    </Button>
  );
};

export default BuyBSW;

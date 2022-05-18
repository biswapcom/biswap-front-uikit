import React from "react";
import Button from "../../../../components/Button/Button";

export interface Props {
  buyBswLink: string
}

const BuyBSW:React.FC<Props> = ({ buyBswLink }) => {
  return (
    <Button as="a" href={buyBswLink} variant='danger' scale='md'>Buy BSW</Button>
  )
}

export default BuyBSW;
import React from "react";
import Img from "./Image";

export default {
  title: "Components/Image",
  argTypes: {},
};

export const Image: React.FC = () => {
  return (
    <div>
      <Img
        src="https://via.placeholder.com/800x400"
        width={800}
        height={400}
        alt="test"
      />
      <div>Image</div>
    </div>
  );
};

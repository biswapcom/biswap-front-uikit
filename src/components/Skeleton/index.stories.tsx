import React, { FC, useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import { Box } from "../Box";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
};

export const Default: React.FC = (args) => {
  return (
    <Box width="500px" mt="24px" ml="24px">
      <Skeleton {...args} />
      <Skeleton animation="waves" width="400px" height="32px" mt="16px" />
      <Skeleton
        animation="waves"
        width="400px"
        height="48px"
        mt="16px"
        variant="md"
      />
    </Box>
  );
};

export const Avatar = Default.bind({});
Avatar.args = {
  width: 40,
  height: 40,
  variant: "circle",
};

export const Animation = Default.bind({});
Animation.args = {
  width: 100,
  height: 200,
  animation: "waves",
};

// export const ParentSize: FC = (args) => {
//   return (
//     <div style={{ width: 200, height: 90 }}>
//       {" "}
//       <Skeleton {...args} />{" "}
//     </div>
//   );
// };

export const Text: React.FC = (args, args2) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/*<h1 style={{ width: 200 }}>{loading ? <Skeleton {...args} /> : "H1"}</h1>*/}
    </>
  );
};

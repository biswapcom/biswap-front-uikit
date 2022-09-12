import React, { FC, PropsWithChildren } from "react";
import useMatchBreakpoints from "./useMatchBreakpoints";

export default {
  title: "Context/useMatchBreakpoints",
  argTypes: {},
};

export const Default: FC<PropsWithChildren> = () => {
  const state = useMatchBreakpoints();

  return (
    <div style={{ padding: "32px" }}>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

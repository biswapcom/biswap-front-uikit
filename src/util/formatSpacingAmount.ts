// eslint-disable-next-line import/prefer-default-export
export const formatSpacingAmount = (x: any) => {
  if (x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return null;
};

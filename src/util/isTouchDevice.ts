const isTouchDevice = (): boolean => {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0)
  );
};

// TODO fix error
// typeof window !== "undefined" &&
// ("ontouchstart" in window ||
//   navigator.maxTouchPoints > 0 ||
//   navigator.msMaxTouchPoints > 0)

export default isTouchDevice;

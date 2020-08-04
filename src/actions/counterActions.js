export const increment = num => {
  return {
    type: "INCREMENT",
    value: num
  };
};

export const decrement = num => {
  return {
    type: "DECREMENT",
    value: num
  };
};

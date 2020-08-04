export const update = (name, age) => {
  return {
    type: "UPDATE",
    val: {
      name,
      age
    }
  };
};

export const remove = () => {
  return {
    type: "DELETE"
  };
};

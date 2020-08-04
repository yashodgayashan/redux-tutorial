const conterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + parseInt(action.value);
    case "DECREMENT":
      return state - action.value;
    default:
      return state;
  }
};

export default conterReducer;

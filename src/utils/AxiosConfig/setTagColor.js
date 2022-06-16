export const setColorTag = (index) => {
  let color = "";
  switch (index) {
    case 0:
      color = "volcano";
      break;
    case 1:
      color = "blue";
      break;
    case 2:
      color = "cyan";
      break;
    case 3:
      color = "volcano";
      break;
    default:
      color = "cyan";
  }
  return color;
};

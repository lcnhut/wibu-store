export const getSizesForProduct = ({ id, colors }) => {
  return {
    id: id,
    colors: colors.map((item) => {
      return item.color;
    }),
  };
};

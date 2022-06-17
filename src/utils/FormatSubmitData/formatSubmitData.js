const formattedData = (values) => {
  let transformData = {};
  const colorList = values.colors.map((color) => {
    return color.color;
  });

  const duplicateColor = colorList.reduce((accumulator, curValue) => {
    if (accumulator.indexOf(curValue) === -1) {
      accumulator.push(curValue);
    }

    return accumulator;
  }, []);

  const colorArr = [];

  duplicateColor.forEach((color) => {
    const listSameColor = values.colors.filter((el) => el.color === color);
    const colorObj = {
      color: color,
      sizes: [],
    };

    listSameColor.forEach((item) => {
      colorObj.sizes.push({
        size: item.size,
        inStock: item.quantity,
      });
    });
    colorArr.push(colorObj);
  });

  transformData = {
    ...values,
    colors: colorArr,
  };

  return transformData;
};
export default formattedData;

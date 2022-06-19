export const convertAllProductToFilterData = (AllProduct) => {
  let result = AllProduct.map((eachProduct) => {
    let colorsOfEachProduct = __getFilterForColor(eachProduct.colors);
    let sizeOfEachProduct = __getFilterForSize(eachProduct.colors);

    return {
      id: eachProduct.id,
      colors: colorsOfEachProduct,
      sizes: sizeOfEachProduct,
    };
  });
  // console.log(result)
  return result;
};

const __getFilterForColor = (dataColor) => {
  let color = [];
  dataColor.map((item) => {
    color.push(item.color);
  });
  return color;
};

const __getFilterForSize = (dataColor) => {
  let size = [];
  dataColor.map((item) => {
    let eachSize = item.sizes.map((eachSize) => {
      return eachSize.size;
    });
    size.push(...eachSize);
  });
  return Array.from(new Set(size));
};

export const getAllColorExitInProduct = (AllProduct) => {
  let allColor = [];
  AllProduct.map((eachProduct) => {
    let colorsOfEachProduct = __getFilterForColor(eachProduct.colors);
    allColor.push(...colorsOfEachProduct);
  });
  return Array.from(new Set(allColor));
};

export const getAllSizeExitInProduct = (AllProduct) => {
  let allSize = [];
  AllProduct.map((eachProduct) => {
    let sizeOfEachProduct = __getFilterForSize(eachProduct.colors);
    allSize.push(...sizeOfEachProduct);
  });
  return Array.from(new Set(allSize));
};

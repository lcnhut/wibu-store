export const convertAllProductToFilterData = (AllProduct) => {
  let result = AllProduct.map((eachProduct) => {
    let colorsOfEachProduct = __getFilterForColor(eachProduct.colors);
    let sizeOfEachProduct = __getFilterForSize(eachProduct.colors);

    return {
      id: eachProduct.id,
      colors: colorsOfEachProduct,
      sizes: sizeOfEachProduct,
      categories: eachProduct.categories,
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

// create filter data Categories

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

export const getAllCategoryExitInProduct = (AllProduct) => {
  let allCategory = [];
  AllProduct.map((eachProduct) => {
    allCategory.push(eachProduct.categories);
  });
  return Array.from(new Set(allCategory));
};

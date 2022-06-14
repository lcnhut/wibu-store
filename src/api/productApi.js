import instance from "../utils/AxiosConfig/AxiosConfig";

const productApi = {
  getAll: () =>
    instance
      .get("products")
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      }),
  add: (product) =>
    instance
      .post("products", {
        name: product.name,
        image: product.image ? product.image : "",
        price: product.price,
        description: product.description ? product.description : "",
        colors: product.colors,
      })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      }),
  delete: (id) => {
    return instance.delete(`/products/${id}`);
  },
};
export default productApi;

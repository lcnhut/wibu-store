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
};
export default productApi;

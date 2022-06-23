import { axiosInstance } from '../utils/AxiosConfig/AxiosConfig';

const productApi = {
  getAll: () =>
    axiosInstance
      .get('products')
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      }),
  add: (product) =>
    axiosInstance
      .post('products', {
        name: product.name,
        image: product.images ? product.images : [],
        price: product.price,
        description: product.description ? product.description : '',
        categories: product.category,
        colors: product.colors,
      })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      }),
  delete: (id) => {
    return axiosInstance.delete(`/products/${id}`);
  },
  getById: (id) => {
    return axiosInstance.get(`/products/${id}`);
  },
  update: (product) => {
    return axiosInstance.put(`/products/${product.id}`, {
      name: product.name,
      image: product.images ? product.images : [],
      price: product.price,
      description: product.description ? product.description : '',
      categories: product.category,
      colors: product.colors,
    });
  },
};
export default productApi;

import { axiosInstance } from '../utils/AxiosConfig/AxiosConfig';

const invoiceApi = {
  getAll: () =>
    axiosInstance
      .get('invoices')
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      }),

  add: (invoice) =>
    axiosInstance
      .post('invoices', {
        customerName: invoice.customerName,
        address: invoice.address,
        contact: invoice.contact,
        products: invoice.products,
        price: invoice.totalPrice,
        status: 0,
      })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      }),
};
export default invoiceApi;

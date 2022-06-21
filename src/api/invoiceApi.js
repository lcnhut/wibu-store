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
};
export default invoiceApi;

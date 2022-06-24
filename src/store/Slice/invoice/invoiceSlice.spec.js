/* eslint-disable no-undef */
import { store } from '../../store';
import { getAllInvoiceAsync } from './invoiceSlice';

describe('store/invoice', () => {
  it('should return initial state', () => {
    const initialState = store.getState().invoice;
    expect(initialState).toEqual({
      list: [],
      isLoading: true,
      error: '',
    });
  });

  // run this when invoice has data
  it('should return a list of invoice', async () => {
    const result = await store.dispatch(getAllInvoiceAsync());
    expect(result.type).toBe('invoice/getAll/fulfilled');

    const state = store.getState().invoice.list;
    expect(state.length).toBeGreaterThan(0);
  });

  // it('should return a list of empty invoice', async () => {
  //   const result = await store.dispatch(getAllInvoiceAsync());
  //   expect(result.type).toBe('invoice/getAll/fulfilled');

  //   const state = store.getState().invoice.list;
  //   expect(state.length).toBe(0);
  // });
});

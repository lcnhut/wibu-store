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

  it('should return list of invoice', async () => {
    const result = await store.dispatch(getAllInvoiceAsync());
    expect(result.type).toBe('invoice/getAll/fulfilled');

    const state = store.getState().invoice.list;
    expect(state.length).toBeGreaterThan(0);
  });
});

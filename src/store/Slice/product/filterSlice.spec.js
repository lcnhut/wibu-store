import { store } from '../../store';
import reducer, {
  addFilterCategoriesForProduct,
  addFilterColorForProduct,
  addFilterPriceForProduct,
  addFilterSizeForProduct,
} from './FilterSlice';

describe('store/filter', () => {
  it('it should initial at filter for categories', () => {
    const initialState = store.getState().filter;
    expect(initialState).toEqual({
      price: 0,
      categories: '',
      colors: [],
      size: 0,
      isLoading: false,
    });
  });
  it('it should change value in filter of categories', () => {
    const prevState = {
      price: 0,
      categories: '',
      colors: [],
      size: 0,
      isLoading: false,
    };
    expect(
      reducer(prevState, addFilterCategoriesForProduct('thang duong'))
    ).toEqual({
      price: 0,
      categories: 'thang duong',
      colors: [],
      size: 0,
      isLoading: false,
    });
  });
  // add filter for colors
  it('it should add a colors into the filter ', () => {
    const prevState = {
      price: 0,
      categories: '',
      colors: [],
      size: 0,
      isLoading: false,
    };
    expect(reducer(prevState, addFilterColorForProduct('red'))).toEqual({
      price: 0,
      categories: '',
      colors: ['red'],
      size: 0,
      isLoading: false,
    });
  });
  // add filter for colors when color exist
  it('it should add a colors into the filter ', () => {
    const prevState = {
      price: 0,
      categories: '',
      colors: ['red'],
      size: 0,
      isLoading: false,
    };
    expect(reducer(prevState, addFilterColorForProduct('red'))).toEqual({
      price: 0,
      categories: '',
      colors: [],
      size: 0,
      isLoading: false,
    });
  });
  // add filter for size
  it('it should add a size into the filter ', () => {
    const prevState = {
      price: 0,
      categories: '',
      colors: [],
      size: 0,
      isLoading: false,
    };
    expect(reducer(prevState, addFilterSizeForProduct(37))).toEqual({
      price: 0,
      categories: '',
      colors: [],
      size: 37,
      isLoading: false,
    });
  });
  // test for price of the product
  it('it should change price in to the filter', () => {
    const prevState = {
      price: 0,
      categories: '',
      colors: [],
      size: 0,
      isLoading: false,
    };
    expect(reducer(prevState, addFilterPriceForProduct(500))).toEqual({
      price: 500,
      categories: '',
      colors: [],
      size: 0,
      isLoading: false,
    });
  });
});

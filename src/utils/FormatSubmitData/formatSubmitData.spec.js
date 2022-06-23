import formattedData from './formatSubmitData';

/* eslint-disable no-undef */
describe('utils/transformData', () => {
  it('should be return a formatted data with merged colors', () => {
    const preFormatData = {
      name: 'New product',
      price: 100,
      description: 'Chất liệu da: Da bò nhập khẩu',
      images: [
        {
          src: 'https://tamanh.net/wp-content/uploads/2016/10/giay-buoc-day-cong-so-gnta5502-d..jp',
        },
      ],
      colors: [
        { color: 'black', size: 40, quantity: 5 },
        { color: 'black', size: 41, quantity: 10 },
        { color: 'brown', size: 40, quantity: 15 },
      ],
    };

    expect(formattedData(preFormatData)).toEqual({
      name: 'New product',
      price: 100,
      description: 'Chất liệu da: Da bò nhập khẩu',
      images: [
        {
          src: 'https://tamanh.net/wp-content/uploads/2016/10/giay-buoc-day-cong-so-gnta5502-d..jp',
        },
      ],
      colors: [
        {
          color: 'black',
          sizes: [
            { size: 40, inStock: 5 },
            { size: 41, inStock: 10 },
          ],
        },
        {
          color: 'brown',
          sizes: [{ size: 40, inStock: 15 }],
        },
      ],
    });
  });
});

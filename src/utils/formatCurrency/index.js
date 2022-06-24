import { EXCHANGE_RATE } from '../CONSTANT';

const formatCurrency = (price, currentLanguage) => {
  let result = price;
  if (currentLanguage === 'vi') {
    result *= EXCHANGE_RATE;
  } else {
    return result;
  }
  return result;
};

export default formatCurrency;

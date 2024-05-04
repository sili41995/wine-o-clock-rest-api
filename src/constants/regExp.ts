import { IRegExp } from '../types/types';

const regExp: IRegExp = {
  phoneNumber: /^\+?\d{1,}$/,
  email: /^[-?\w.?%?]+@\w+\.{1}\w{2,4}$/,
  notEmptyValue: /\S/,
};

export default regExp;

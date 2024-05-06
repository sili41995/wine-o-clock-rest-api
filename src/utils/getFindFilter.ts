import { IGetFindFilterProps, IFindFilter } from '../types/types';

const getFindFilter = (query: IGetFindFilterProps): IFindFilter => {
  const { page = 1, limit = 10, title = '' } = query;
  const skip = (Number(page) - 1) * Number(limit);
  const findFilter = { title: { $regex: title, $options: 'i' } };

  return { skip, limit: Number(limit), findFilter };
};

export default getFindFilter;

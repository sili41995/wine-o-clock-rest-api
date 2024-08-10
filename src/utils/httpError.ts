import { IHttpError } from '../types/types';

const errorMessageList: { [key: number]: string } = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict',
  500: 'Server error',
};

const httpError = ({ status = 500, message = errorMessageList[status] }: IHttpError): IHttpError => {
  const error = new Error(message) as Error & IHttpError;
  error.status = status;

  return error;
};

export default httpError;

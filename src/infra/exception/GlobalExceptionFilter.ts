import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ZodValidationException } from 'nestjs-zod';
import DefaultExceptionJSON from './helper/DefaultExceptionJSON';
import FormatZodException from './helper/FormatZodException';
import IZodError from './interface/IZodError';

type IErrorResponse = { status: number; json: object | string };

const errorObject: Record<string, (error: Error) => IErrorResponse> = {
  NotFoundException: (error: HttpException) => (
    { status: error.getStatus(), json: error.getResponse() }
  ),
  UnauthorizedException: (error: HttpException) => (
    { status: error.getStatus(), json: error.getResponse() }
  ),
};

const errorFilter = (exception: Error): IErrorResponse => {
  const errorFunction = errorObject[exception.constructor.name];
  if (!errorFunction) return DefaultExceptionJSON.defaultError;
  return errorFunction(exception);
};

@Catch()
class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    console.log({ exception });
    console.log({ method: request.method, route: request.url });
    let errorResponse: IErrorResponse;
    let zodErrorResponse: IZodError;

    if (exception instanceof Error) {
      errorResponse = errorFilter(exception);
    } else {
      errorResponse = DefaultExceptionJSON.defaultError;
    }

    if (exception instanceof ZodValidationException) {
      zodErrorResponse = FormatZodException(exception);
      return response.status(zodErrorResponse.status).json(zodErrorResponse.json);
    }

    return response.status(errorResponse.status).json(errorResponse.json);
  }
}

export default GlobalExceptionFilter;

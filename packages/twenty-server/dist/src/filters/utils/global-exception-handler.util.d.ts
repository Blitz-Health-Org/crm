import { HttpException } from '@nestjs/common';
import { BaseGraphQLError } from 'src/filters/utils/graphql-errors.util';
import { ExceptionHandlerService } from 'src/integrations/exception-handler/exception-handler.service';
export declare const handleExceptionAndConvertToGraphQLError: (exception: Error, exceptionHandlerService: ExceptionHandlerService) => BaseGraphQLError;
export declare const handleException: (exception: Error, exceptionHandlerService: ExceptionHandlerService) => void;
export declare const convertExceptionToGraphQLError: (exception: Error) => BaseGraphQLError;
export declare const convertHttpExceptionToGraphql: (exception: HttpException) => BaseGraphQLError;
export declare const convertExceptionToGraphql: (exception: Error) => BaseGraphQLError;

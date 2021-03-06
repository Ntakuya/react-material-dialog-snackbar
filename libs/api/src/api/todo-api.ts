/* tslint:disable */
/* eslint-disable */
/**
 * Todo example
 * The Todo API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common';
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from '../base';
// @ts-ignore
import { CreateTodoDto } from '../model';
// @ts-ignore
import { GetTodoListResponse } from '../model';
// @ts-ignore
import { TodoEntity } from '../model';
// @ts-ignore
import { UpdateTodoDto } from '../model';
/**
 * TodoApi - axios parameter creator
 * @export
 */
export const TodoApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {CreateTodoDto} createTodoDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerCreate: async (
      createTodoDto: CreateTodoDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'createTodoDto' is not null or undefined
      assertParamExists('todoControllerCreate', 'createTodoDto', createTodoDto);
      const localVarPath = `/todos`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        createTodoDto,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} todoId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerDelete: async (
      todoId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'todoId' is not null or undefined
      assertParamExists('todoControllerDelete', 'todoId', todoId);
      const localVarPath = `/todos/{todoId}`.replace(
        `{${'todoId'}}`,
        encodeURIComponent(String(todoId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerIndex: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/todos`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} todoId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerShow: async (
      todoId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'todoId' is not null or undefined
      assertParamExists('todoControllerShow', 'todoId', todoId);
      const localVarPath = `/todos/{todoId}`.replace(
        `{${'todoId'}}`,
        encodeURIComponent(String(todoId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} todoId
     * @param {UpdateTodoDto} updateTodoDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerUpdate: async (
      todoId: string,
      updateTodoDto: UpdateTodoDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'todoId' is not null or undefined
      assertParamExists('todoControllerUpdate', 'todoId', todoId);
      // verify required parameter 'updateTodoDto' is not null or undefined
      assertParamExists('todoControllerUpdate', 'updateTodoDto', updateTodoDto);
      const localVarPath = `/todos/{todoId}`.replace(
        `{${'todoId'}}`,
        encodeURIComponent(String(todoId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        updateTodoDto,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * TodoApi - functional programming interface
 * @export
 */
export const TodoApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TodoApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {CreateTodoDto} createTodoDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async todoControllerCreate(
      createTodoDto: CreateTodoDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoEntity>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerCreate(
        createTodoDto,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} todoId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async todoControllerDelete(
      todoId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoEntity>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerDelete(
        todoId,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async todoControllerIndex(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetTodoListResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerIndex(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} todoId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async todoControllerShow(
      todoId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoEntity>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerShow(
        todoId,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} todoId
     * @param {UpdateTodoDto} updateTodoDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async todoControllerUpdate(
      todoId: string,
      updateTodoDto: UpdateTodoDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoEntity>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerUpdate(
        todoId,
        updateTodoDto,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * TodoApi - factory interface
 * @export
 */
export const TodoApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = TodoApiFp(configuration);
  return {
    /**
     *
     * @param {CreateTodoDto} createTodoDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerCreate(
      createTodoDto: CreateTodoDto,
      options?: any
    ): AxiosPromise<TodoEntity> {
      return localVarFp
        .todoControllerCreate(createTodoDto, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} todoId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerDelete(
      todoId: string,
      options?: any
    ): AxiosPromise<TodoEntity> {
      return localVarFp
        .todoControllerDelete(todoId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerIndex(options?: any): AxiosPromise<GetTodoListResponse> {
      return localVarFp
        .todoControllerIndex(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} todoId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerShow(
      todoId: string,
      options?: any
    ): AxiosPromise<TodoEntity> {
      return localVarFp
        .todoControllerShow(todoId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} todoId
     * @param {UpdateTodoDto} updateTodoDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    todoControllerUpdate(
      todoId: string,
      updateTodoDto: UpdateTodoDto,
      options?: any
    ): AxiosPromise<TodoEntity> {
      return localVarFp
        .todoControllerUpdate(todoId, updateTodoDto, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * TodoApi - object-oriented interface
 * @export
 * @class TodoApi
 * @extends {BaseAPI}
 */
export class TodoApi extends BaseAPI {
  /**
   *
   * @param {CreateTodoDto} createTodoDto
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoApi
   */
  public todoControllerCreate(createTodoDto: CreateTodoDto, options?: any) {
    return TodoApiFp(this.configuration)
      .todoControllerCreate(createTodoDto, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {string} todoId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoApi
   */
  public todoControllerDelete(todoId: string, options?: any) {
    return TodoApiFp(this.configuration)
      .todoControllerDelete(todoId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoApi
   */
  public todoControllerIndex(options?: any) {
    return TodoApiFp(this.configuration)
      .todoControllerIndex(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {string} todoId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoApi
   */
  public todoControllerShow(todoId: string, options?: any) {
    return TodoApiFp(this.configuration)
      .todoControllerShow(todoId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {string} todoId
   * @param {UpdateTodoDto} updateTodoDto
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoApi
   */
  public todoControllerUpdate(
    todoId: string,
    updateTodoDto: UpdateTodoDto,
    options?: any
  ) {
    return TodoApiFp(this.configuration)
      .todoControllerUpdate(todoId, updateTodoDto, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

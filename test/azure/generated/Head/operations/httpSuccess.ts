/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Mappers from "../models/httpSuccessMappers";
import { AutoRestHeadTestServiceContext } from "../autoRestHeadTestServiceContext";

/** Class representing a HttpSuccess. */
export class HttpSuccess {
  private readonly client: AutoRestHeadTestServiceContext;

  /**
   * Create a HttpSuccess.
   * @param {AutoRestHeadTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHeadTestServiceContext) {
    this.client = client;
  }

  /**
   * Return 200 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async head200WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<boolean>> {
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        {
          options
        },
        head200OperationSpec);
      // Deserialize Response
      const statusCode = operationRes.status;
      operationRes.parsedBody = (statusCode === 200);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Return 204 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async head204WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<boolean>> {
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        {
          options
        },
        head204OperationSpec);
      // Deserialize Response
      const statusCode = operationRes.status;
      operationRes.parsedBody = (statusCode === 204);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Return 404 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async head404WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<boolean>> {
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        {
          options
        },
        head404OperationSpec);
      // Deserialize Response
      const statusCode = operationRes.status;
      operationRes.parsedBody = (statusCode === 204);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Return 200 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {boolean} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  head200(): Promise<boolean>;
  head200(options: msRest.RequestOptionsBase): Promise<boolean>;
  head200(callback: msRest.ServiceCallback<boolean>): void;
  head200(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  head200(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<boolean>;
    if (!callback) {
      return this.head200WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as boolean);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.head200WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as boolean;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Return 204 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {boolean} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  head204(): Promise<boolean>;
  head204(options: msRest.RequestOptionsBase): Promise<boolean>;
  head204(callback: msRest.ServiceCallback<boolean>): void;
  head204(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  head204(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<boolean>;
    if (!callback) {
      return this.head204WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as boolean);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.head204WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as boolean;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Return 404 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {boolean} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  head404(): Promise<boolean>;
  head404(options: msRest.RequestOptionsBase): Promise<boolean>;
  head404(callback: msRest.ServiceCallback<boolean>): void;
  head404(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  head404(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<boolean>;
    if (!callback) {
      return this.head404WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as boolean);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.head404WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as boolean;
        return cb(err, result, data.request, data);
      });
    }
  }

}

// Operation Specifications
const head200OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/success/200",
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const head204OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/success/204",
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const head404OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/success/404",
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

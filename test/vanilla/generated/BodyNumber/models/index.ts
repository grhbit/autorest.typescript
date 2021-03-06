/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/core-http";
import * as coreHttp from "@azure/core-http";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing AutoRestNumberTestServiceOptions.
 */
export interface AutoRestNumberTestServiceOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Contains response data for the getNull operation.
 */
export type NumberGetNullResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getInvalidFloat operation.
 */
export type NumberGetInvalidFloatResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getInvalidDouble operation.
 */
export type NumberGetInvalidDoubleResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getInvalidDecimal operation.
 */
export type NumberGetInvalidDecimalResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getBigFloat operation.
 */
export type NumberGetBigFloatResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getBigDouble operation.
 */
export type NumberGetBigDoubleResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getBigDoublePositiveDecimal operation.
 */
export type NumberGetBigDoublePositiveDecimalResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getBigDoubleNegativeDecimal operation.
 */
export type NumberGetBigDoubleNegativeDecimalResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getBigDecimal operation.
 */
export type NumberGetBigDecimalResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getBigDecimalPositiveDecimal operation.
 */
export type NumberGetBigDecimalPositiveDecimalResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getBigDecimalNegativeDecimal operation.
 */
export type NumberGetBigDecimalNegativeDecimalResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getSmallFloat operation.
 */
export type NumberGetSmallFloatResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getSmallDouble operation.
 */
export type NumberGetSmallDoubleResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

/**
 * Contains response data for the getSmallDecimal operation.
 */
export type NumberGetSmallDecimalResponse = {
  /**
   * The parsed response body.
   */
  body: number;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: number;
    };
};

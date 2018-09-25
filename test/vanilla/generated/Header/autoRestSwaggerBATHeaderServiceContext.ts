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

const packageName = "";
const packageVersion = "";

export class AutoRestSwaggerBATHeaderServiceContext extends msRest.ServiceClient {

  /**
   * Initializes a new instance of the AutoRestSwaggerBATHeaderServiceContext class.
   *
   * @param {string} [baseUri] The base URI of the service.
   *
   * @param {object} [options] The parameter options
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {

    if (!options) {
      options = {};
    }

    super(undefined, options);

    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = "http://localhost:3000";
    }
    this.requestContentType = "application/json; charset=utf-8";

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
  }
}

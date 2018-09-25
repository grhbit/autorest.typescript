/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestRequiredOptionalTestServiceContext } from "./autoRestRequiredOptionalTestServiceContext";

class AutoRestRequiredOptionalTestService extends AutoRestRequiredOptionalTestServiceContext {
  // Operation groups
  implicit: operations.Implicit;
  explicit: operations.Explicit;

  /**
   * Initializes a new instance of the AutoRestRequiredOptionalTestService class.
   *
   * @param {string} requiredGlobalPath number of items to skip
   *
   * @param {string} requiredGlobalQuery number of items to skip
   *
   * @param {string} [baseUri] The base URI of the service.
   *
   * @param {object} [options] The parameter options
   */
  constructor(requiredGlobalPath: string, requiredGlobalQuery: string, baseUri?: string, options?: Models.AutoRestRequiredOptionalTestServiceOptions) {
    super(requiredGlobalPath, requiredGlobalQuery, baseUri, options);
    this.implicit = new operations.Implicit(this);
    this.explicit = new operations.Explicit(this);
  }
}

// Operation Specifications

export {
  AutoRestRequiredOptionalTestService,
  AutoRestRequiredOptionalTestServiceContext,
  Models as AutoRestRequiredOptionalTestServiceModels,
  Mappers as AutoRestRequiredOptionalTestServiceMappers
};
export * from "./operations";

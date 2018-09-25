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
import { AutoRestParameterizedHostTestClientContext } from "./autoRestParameterizedHostTestClientContext";

class AutoRestParameterizedHostTestClient extends AutoRestParameterizedHostTestClientContext {
  // Operation groups
  paths: operations.Paths;

  /**
   * Initializes a new instance of the AutoRestParameterizedHostTestClient class.
   *
   * @param {object} [options] The parameter options
   */
  constructor(options?: Models.AutoRestParameterizedHostTestClientOptions) {
    super(options);
    this.paths = new operations.Paths(this);
  }
}

// Operation Specifications

export {
  AutoRestParameterizedHostTestClient,
  AutoRestParameterizedHostTestClientContext,
  Models as AutoRestParameterizedHostTestModels,
  Mappers as AutoRestParameterizedHostTestMappers
};
export * from "./operations";

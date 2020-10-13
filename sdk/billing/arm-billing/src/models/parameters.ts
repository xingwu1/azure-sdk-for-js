/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const agreementName: msRest.OperationURLParameter = {
  parameterPath: "agreementName",
  mapper: {
    required: true,
    serializedName: "agreementName",
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2020-05-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-03-01-preview',
    type: {
      name: "String"
    }
  }
};
export const billingAccountName: msRest.OperationURLParameter = {
  parameterPath: "billingAccountName",
  mapper: {
    required: true,
    serializedName: "billingAccountName",
    type: {
      name: "String"
    }
  }
};
export const billingPeriodName: msRest.OperationURLParameter = {
  parameterPath: "billingPeriodName",
  mapper: {
    required: true,
    serializedName: "billingPeriodName",
    type: {
      name: "String"
    }
  }
};
export const billingProfileName: msRest.OperationURLParameter = {
  parameterPath: "billingProfileName",
  mapper: {
    required: true,
    serializedName: "billingProfileName",
    type: {
      name: "String"
    }
  }
};
export const billingRoleAssignmentName: msRest.OperationURLParameter = {
  parameterPath: "billingRoleAssignmentName",
  mapper: {
    required: true,
    serializedName: "billingRoleAssignmentName",
    type: {
      name: "String"
    }
  }
};
export const billingRoleDefinitionName: msRest.OperationURLParameter = {
  parameterPath: "billingRoleDefinitionName",
  mapper: {
    required: true,
    serializedName: "billingRoleDefinitionName",
    type: {
      name: "String"
    }
  }
};
export const customerName: msRest.OperationURLParameter = {
  parameterPath: "customerName",
  mapper: {
    required: true,
    serializedName: "customerName",
    type: {
      name: "String"
    }
  }
};
export const downloadToken: msRest.OperationQueryParameter = {
  parameterPath: "downloadToken",
  mapper: {
    required: true,
    serializedName: "downloadToken",
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const instructionName: msRest.OperationURLParameter = {
  parameterPath: "instructionName",
  mapper: {
    required: true,
    serializedName: "instructionName",
    type: {
      name: "String"
    }
  }
};
export const invoiceName: msRest.OperationURLParameter = {
  parameterPath: "invoiceName",
  mapper: {
    required: true,
    serializedName: "invoiceName",
    type: {
      name: "String"
    }
  }
};
export const invoiceSectionName: msRest.OperationURLParameter = {
  parameterPath: "invoiceSectionName",
  mapper: {
    required: true,
    serializedName: "invoiceSectionName",
    type: {
      name: "String"
    }
  }
};
export const name: msRest.OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    required: true,
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const periodEndDate: msRest.OperationQueryParameter = {
  parameterPath: "periodEndDate",
  mapper: {
    required: true,
    serializedName: "periodEndDate",
    type: {
      name: "String"
    }
  }
};
export const periodStartDate: msRest.OperationQueryParameter = {
  parameterPath: "periodStartDate",
  mapper: {
    required: true,
    serializedName: "periodStartDate",
    type: {
      name: "String"
    }
  }
};
export const productName: msRest.OperationURLParameter = {
  parameterPath: "productName",
  mapper: {
    required: true,
    serializedName: "productName",
    type: {
      name: "String"
    }
  }
};
export const search: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "search"
  ],
  mapper: {
    serializedName: "$search",
    type: {
      name: "String"
    }
  }
};
export const skiptoken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skiptoken"
  ],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    constraints: {
      InclusiveMaximum: 100,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};

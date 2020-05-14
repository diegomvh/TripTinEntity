import { ServiceConfig } from 'angular-odata';


export const AirlinesServiceConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Airlines",
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath"
  },
  {
    "type": "Org.OData.Capabilities.V1.SearchRestrictions"
  },
  {
    "type": "Org.OData.Capabilities.V1.InsertRestrictions"
  }
]
} as ServiceConfig;
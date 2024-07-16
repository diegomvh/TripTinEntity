﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicTransportation } from './public-transportation.entity';
import { PublicTransportationModel } from './public-transportation.model';
import { PublicTransportationCollection } from './public-transportation.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PublicTransportationEntityConfig = {
  name: 'PublicTransportation',
  base: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem',
  model: PublicTransportationModel,
  collection: PublicTransportationCollection,
  fields: {
    SeatNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PublicTransportation>;
//#endregion
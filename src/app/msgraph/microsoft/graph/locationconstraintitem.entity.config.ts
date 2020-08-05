﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocationConstraintItem } from './locationconstraintitem.entity';
//#endregion

export const LocationConstraintItemConfig = {
  name: "LocationConstraintItem",
  base: "microsoft.graph.location",
  annotations: [],
  fields: {
    resolveAvailability: {type: 'Edm.Boolean'}
  }
} as EntityConfig<LocationConstraintItem>;
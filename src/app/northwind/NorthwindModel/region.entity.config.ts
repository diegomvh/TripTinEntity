﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Region } from './region.entity';
import { RegionModel } from './region.model';
import { RegionCollection } from './region.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const RegionEntityConfig = {
  name: "Region",
  model: RegionModel,
  collection: RegionCollection,
  keys: [{ref: 'RegionID'}],
  fields: {
    RegionID: {type: 'Edm.Int32', nullable: false},
    RegionDescription: {type: 'Edm.String', nullable: false, maxLength: 50},
    Territories: {type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Region>;
//#endregion
﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingValue } from './settingvalue.entity';
//#endregion

export const SettingValueConfig = {
  name: "SettingValue",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<SettingValue>;
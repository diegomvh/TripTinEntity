﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { Importance } from './importance.enum';
//#endregion

export const ImportanceConfig = {
  name: "Importance",
  members: Importance
} as EnumConfig<Importance>;
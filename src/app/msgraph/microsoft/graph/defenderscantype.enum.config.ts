﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefenderScanType } from './defenderscantype.enum';
//#endregion

export const DefenderScanTypeConfig = {
  name: "DefenderScanType",
  members: DefenderScanType
} as EnumConfig<DefenderScanType>;
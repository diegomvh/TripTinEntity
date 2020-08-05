﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPinCharacterSet } from './managedapppincharacterset.enum';
//#endregion

export const ManagedAppPinCharacterSetConfig = {
  name: "ManagedAppPinCharacterSet",
  members: ManagedAppPinCharacterSet
} as EnumConfig<ManagedAppPinCharacterSet>;
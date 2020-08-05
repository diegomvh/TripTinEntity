﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionEnforcementLevel } from './windowsinformationprotectionenforcementlevel.enum';
//#endregion

export const WindowsInformationProtectionEnforcementLevelConfig = {
  name: "WindowsInformationProtectionEnforcementLevel",
  members: WindowsInformationProtectionEnforcementLevel
} as EnumConfig<WindowsInformationProtectionEnforcementLevel>;
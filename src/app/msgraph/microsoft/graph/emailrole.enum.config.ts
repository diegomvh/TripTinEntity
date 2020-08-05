﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EmailRole } from './emailrole.enum';
//#endregion

export const EmailRoleConfig = {
  name: "EmailRole",
  members: EmailRole
} as EnumConfig<EmailRole>;
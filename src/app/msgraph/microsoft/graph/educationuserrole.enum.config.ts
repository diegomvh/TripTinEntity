﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationUserRole } from './educationuserrole.enum';
//#endregion

export const EducationUserRoleConfig = {
  name: "EducationUserRole",
  members: EducationUserRole
} as EnumConfig<EducationUserRole>;
﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { UserAgent } from './useragent.entity';
import { ServiceRole } from './servicerole.enum';
//#endregion

export interface ServiceUserAgent extends UserAgent {
  //#region ODataApi Properties
  role: ServiceRole;
  //#endregion
}
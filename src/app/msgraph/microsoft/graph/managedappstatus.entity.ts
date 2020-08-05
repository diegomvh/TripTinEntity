﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface ManagedAppStatus extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  version?: string;
  //#endregion
}